import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import * as crypto from "crypto";

/*import { ArticleEntity } from "../article/article.entity";
import { CommentaireEntity } from "../commentaire/commentaire.entity";
import { CreateUserDto } from "./models/CreateUserDto";*/

@Entity({ name: "user" })
export class User {

  /*@OneToMany(type => ArticleEntity, article => article.user)
  article: ArticleEntity[];*/

  @Column({ type: "varchar", name: "avatar" })
  avatar: string;

  /*@OneToMany(type => CommentaireEntity, commentaire => commentaire.user)
  commentaire: CommentaireEntity[];*/

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

  @PrimaryGeneratedColumn({ name: "user_id" })
  userId: string;
}
