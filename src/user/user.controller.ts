import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ApiUseTags } from "@nestjs/swagger";
import { ApiBearerAuth } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger";
import { User } from "./interfaces/user.interface";
import { CreateUserDto } from "./models/CreateUserDto";
import { UserService } from "./user.service";

@ApiBearerAuth()
@ApiUseTags("User")
@Controller("User")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ title: "Create User"})
  @ApiResponse({ status: 201, description: "The record has been successfully created." })
  @ApiResponse({ status: 403, description: "Forbidden"})
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string): User {
    return this.userService.findOne(+id);
  }

  /*@Get(":id")
  @ApiResponse({
    status: HttpStatus.OK
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND
  })
  async getById(@Param("id") id: string) {
    return this.userService.getById(id);
  }*/
}
