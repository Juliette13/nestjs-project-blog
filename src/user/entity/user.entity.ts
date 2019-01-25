import * as crypto from "crypto";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { getOrDefault } from "../../utils/copy-constructor.tools";

import { Article } from "../../article/entity/article.entity";
import { Commentaire } from "../../commentaire/entity/commentaire.entity";
import { Note } from "../../note/entity/note.entity";

@Entity({ name: "user" })
export class User {
  @OneToMany(type => Article, article => article.articleId)
  article: Article[];

  @Column({ type: "varchar", name: "avatar", nullable: true })
  avatar: string;

  @OneToMany(type => Commentaire, commentaire => commentaire.commentaireId)
  commentaire: Commentaire[];

  @CreateDateColumn()
  created: Date;

  @Column({ type: "varchar", name: "email", length: 200 })
  email: string;

  @Column({ type: "varchar", name: "first_name", length: 100 })
  firstName: string;

  @Column({ type: "varchar", name: "last_name", length: 100 })
  lastName: string;

  @Column({ type: "varchar", name: "mobile_phone", length: 31, nullable: true })
  mobilePhone: string;

  @OneToMany(type => Note, note => note.noteId)
  note: Note[];

  @Column({ type: "varchar", name: "password" })
  password: string;

  @Column({ type: "varchar", name: "type", nullable: true })
  type: string;

  @UpdateDateColumn()
  updated: Date;

  @PrimaryGeneratedColumn({ name: "user_id" })
  userId: string;

  constructor(copy: Partial<User> = {}) {
    this.email = getOrDefault(copy.email, null);
    this.firstName = getOrDefault(copy.firstName, null);
    this.lastName = getOrDefault(copy.lastName, null);
    this.mobilePhone = getOrDefault(copy.mobilePhone, null);
    this.password = getOrDefault(copy.password, null);
    this.type = getOrDefault(copy.type, null);
    this.avatar = getOrDefault(copy.avatar, null);
    this.userId = getOrDefault(copy.userId, undefined);
  }
}
