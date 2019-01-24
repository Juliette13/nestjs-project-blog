import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put, UseGuards
} from '@nestjs/common';
import { ApiUseTags } from "@nestjs/swagger";
import { ApiBearerAuth } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger";
import { ApiResponse } from "@nestjs/swagger";
import { User } from "./interfaces/user.interface";
import { CreateUserDto } from "./models/CreateUserDto";
import { UpdateUserDto } from "./models/UpdateUserDto";
import { UserService } from "./user.service";
import {JwtAuthGuard} from '../authentication/auth.guard';

@ApiBearerAuth()
@ApiUseTags("User")
@Controller("User")
@ApiBearerAuth()
@UseGuards(new JwtAuthGuard())
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(":user")
  @ApiOperation({ title: "Create User" })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created."
  })
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

  @Get("AllUser")
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async getAllUser() {
    return this.userService.getAll();
  }

  @Put(":id")
  async updateById(
    @Param("id") id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }
}
