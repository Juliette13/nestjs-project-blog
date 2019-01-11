import { ApiModelProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiModelProperty()
  readonly avatar: string;
  @ApiModelProperty()
  readonly created: Date;
  @ApiModelProperty()
  readonly updated: Date;
  @ApiModelProperty()
  readonly email: string;
  @ApiModelProperty()
  readonly firstName: string;
  @ApiModelProperty()
  readonly lastName: string;
  @ApiModelProperty()
  readonly mobilePhone: string;
  @ApiModelProperty()
  readonly password: string;
  @ApiModelProperty()
  readonly type: string;
}
