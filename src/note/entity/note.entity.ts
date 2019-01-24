import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Article } from "../../article/entity/article.entity";
import { User } from "../../user/entity/user.entity";
import { getOrDefault } from "../../utils/copy-constructor.tools";

// import { ArticleEntity } from "../article/article.entity";
// import { CommentaireEntity } from "../commentaire/commentaire.entity";
// import { CreateUserDto } from "./models/CreateUserDto";

@Entity({ name: "note" })
export class Note {
  @ManyToOne(type => Article, article => article.articleId)
  article: Article;

  @CreateDateColumn()
  created: Date;

  @PrimaryGeneratedColumn({ name: "note_id" })
  noteId: number;

  @UpdateDateColumn()
  updated: Date;

  @ManyToOne(type => User, user => user.userId)
  user: User;

  @Column({ type: "integer", name: "value" })
  mark: number;

  constructor(copy: Partial<Note> = {}) {
    this.noteId = getOrDefault(copy.noteId, null);
    this.mark = getOrDefault(copy.mark, null);
  }
}
