import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Commentaire } from "../../commentaire/entity/commentaire.entity";
import { Note } from "../../note/entity/note.entity";
import { User } from "../../user/entity/user.entity";
import { getOrDefault } from "../../utils/copy-constructor.tools";


@Entity({ name: "article" })
export class Article {
  @PrimaryGeneratedColumn({ name: "article_id" })
  articleId: number;

  @OneToMany(type => Commentaire, commentaire => commentaire.commentaireId)
  commentaire: Commentaire;

  @Column({ type: "varchar", name: "content", length: 10000 })
  content: string;

  @CreateDateColumn()
  created: Date;

  @OneToMany(type => Note, note => note.noteId)
  note: Note;

  @Column({ type: "varchar", name: "title", length: 200 })
  title: string;

  @UpdateDateColumn()
  updated: Date;

  @ManyToOne(type => User, user => user.userId)
  user: User;

  constructor(copy: Partial<Article> = {}) {
    this.articleId = getOrDefault(copy.articleId, null);
    this.content = getOrDefault(copy.content, null);
    this.title = getOrDefault(copy.title, null);
  }
}
