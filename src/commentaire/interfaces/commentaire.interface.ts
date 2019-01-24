import { Article } from "../../article/entity/article.entity";
import { User } from "../../user/entity/user.entity";

export class Commentaire {
  readonly article: Article;
  readonly content: string;
  readonly created: Date;
  readonly user: User;
}
