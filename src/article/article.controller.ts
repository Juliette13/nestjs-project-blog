import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post, Put
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags
} from "@nestjs/swagger";
import { ArticleService } from "./article.service";
import { CreateArticleDTO } from "./models/CreateArticleDTO";
import { UpdateArticleDTO } from "./models/UpdateArticleDTO";

@ApiBearerAuth()
@ApiUseTags("Article")
@Controller("Article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post(":article")
  @ApiOperation({ title: "Create Article" })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created."
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async create(@Body() createArticleDTO: CreateArticleDTO) {
    this.articleService.create(createArticleDTO);
  }

  @Delete(":id")
  async deleteArticle(@Param("id") id: number) {
    return this.articleService.deleteArticle(id);
  }

  @Get("AllArticle")
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async getAllArticle() {
    return this.articleService.getAll();
  }

  @Get(":id")
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async getById(@Param("id") id: number) {
    return this.articleService.getById(id);
  }

  @Put(":id")
  async updateById(
      @Param("id") id: string,
      @Body() updateArticleDto: UpdateArticleDTO
  ) {
    return this.articleService.updateArticle(id, updateArticleDto);
  }

}
