import { ApiModelProperty } from "@nestjs/swagger";

export class AuthUserDTO {
  @ApiModelProperty()
  readonly email: string;
  @ApiModelProperty()
  readonly password: string;
}
