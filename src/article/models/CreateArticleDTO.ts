import { ApiModelProperty } from "@nestjs/swagger";

export class CreateArticleDTO {
    @ApiModelProperty()
    readonly created: Date;
    @ApiModelProperty()
    readonly updated: Date;
    @ApiModelProperty()
    readonly content: string;
    @ApiModelProperty()
    readonly title: string;
}