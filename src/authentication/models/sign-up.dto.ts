import { ApiModelProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsString } from "class-validator";

export class SignUpDto {
  @IsEmail()
  @IsDefined()
  @ApiModelProperty()
  email: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  firstName: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  lastName: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  mobilePhone: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  password: string;
}
