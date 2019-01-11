import { Body, Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ApiUseTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@ApiUseTags("User")
@Controller("User")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  @ApiResponse({
    status: HttpStatus.OK
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND
  })
  async getById(@Param("id") id: string) {
    return this.userService.getById(id);
  }
}
