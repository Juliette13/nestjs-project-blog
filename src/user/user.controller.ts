import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ApiUseTags } from "@nestjs/swagger";
import { ApiBearerAuth } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger";
import { User } from "./interfaces/user.interface";
import { IUserAuth } from "./interfaces/user.auth.interface";
import { AuthUserDTO } from "./models/AuthUserDTO";
import { CreateUserDto } from "./models/CreateUserDto";
import { UpdateUserDto } from "./models/UpdateUserDto";
import { UserService } from "./user.service";

@ApiBearerAuth()
@ApiUseTags("User")
@Controller("User")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("userAuth")
  @ApiOperation({ title: "Authenticate User" })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async authenticate(@Body() authUserDTO: AuthUserDTO) {
    return this.userService.authenticate(authUserDTO);
  }

  @Post(":user")
  @ApiOperation({ title: "Create User" })
  @ApiResponse({ status: 201, description: "The record has been successfully created."})
  @ApiResponse({ status: 403, description: "Forbidden." })
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: number) {
    return this.userService.deleteUser(id);
  }

  @Get(":id")
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async getById(@Param("id") id: number) {
    return this.userService.getById(id);
  }

  @Put(":id")
  async updateById(
    @Param("id") id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }
}
