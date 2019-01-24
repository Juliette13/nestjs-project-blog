import { ApiModelProperty } from "@nestjs/swagger";
import { Article } from "../../article/entity/article.entity";
import { User } from "../../user/entity/user.entity";

export class CreateCommentDTO {
  @ApiModelProperty()
  readonly article: Article;
  @ApiModelProperty()
  readonly content: string;
  @ApiModelProperty()
  readonly created: Date;
  @ApiModelProperty()
  readonly user: User;
}
