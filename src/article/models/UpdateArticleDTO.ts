import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateArticleDTO {
    @ApiModelProperty()
    readonly content: string;
    @ApiModelProperty()
    readonly created: Date;
    @ApiModelProperty()
    readonly title: string;
    @ApiModelProperty()
    readonly updated: Date;
}
