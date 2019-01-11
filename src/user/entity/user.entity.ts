import * as crypto from "crypto";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { ArticleEntity } from "../article/project.entity";
import { CommentaireEntity } from "../commentaire/project.entity";
import { AppError } from "../common/error/AppError";
import { AppErrorTypeEnum } from "../common/error/AppErrorTypeEnum";
import { CreateUserDto } from "./models/CreateUserDto";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  public static async createUser(user: CreateUserDto): Promise<UserEntity> {
    let u: UserEntity;
    u = await UserEntity.findOne({ username: user.username });
    if (u) {
      throw new AppError(AppErrorTypeEnum.USER_EXISTS);
    } else {
      u = new UserEntity();
      Object.assign(u, user);
      return await UserEntity.save(u);
    }
  }
  public static async findAll(): Promise<UserEntity[]> {
    const users: UserEntity[] = await UserEntity.find();
    if (users.length > 0) {
      return Promise.resolve(users);
    } else {
      throw new AppError(AppErrorTypeEnum.NO_USERS_IN_DB);
    }
  }

  set password(password: string) {
    const passHash = crypto.createHmac("sha256", password).digest("hex");
    this.password_hash = passHash;
  }

  @OneToMany(type => ArticleEntity, article => article.user)
  article: ArticleEntity[];
  @Column({ type: "varchar", name: "avatar" })
  avatar: string;

  @OneToMany(type => CommentaireEntity, commentaire => commentaire.user)
  commentaire: CommentaireEntity[];

  @CreateDateColumn()
  created: Date;

  @Column({ type: "varchar", name: "email", length: 200 })
  email: string;

  @Column({ type: "varchar", name: "first_name", length: 100 })
  firstName: string;

  @Column({ type: "varchar", name: "last_name", length: 100 })
  lastName: string;

  @Column({ type: "varchar", name: "mobile_phone", length: 31 })
  mobilePhone: string;

  @Column({ type: "varchar", name: "password" })
  password: string;

  @Column({ type: "varchar", name: "type" })
  type: string;

  @UpdateDateColumn()
  updated: Date;

  @PrimaryGeneratedColumn("uuid", { name: "user_id" })
  userId: string;
}
