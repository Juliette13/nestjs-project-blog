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

@Entity({ name: "commentaire" })
export class Commentaire {
  @ManyToOne(type => Article, article => article.articleId)
  article: Article;
  @PrimaryGeneratedColumn({ name: "commentaire_id" })
  commentaireId: number;

  @Column({ type: "varchar", name: "content", length: 1000 })
  content: string;
  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToOne(type => User, user => user.userId)
  user: User;

  constructor(copy: Partial<Commentaire> = {}) {
    this.commentaireId = getOrDefault(copy.commentaireId, null);
    this.content = getOrDefault(copy.content, null);
  }
}
