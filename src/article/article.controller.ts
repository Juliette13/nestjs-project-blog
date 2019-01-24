import { Controller, Delete, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { ArticleService } from "./article.service";

@ApiBearerAuth()
@ApiUseTags("Article")
@Controller("Article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

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
}
