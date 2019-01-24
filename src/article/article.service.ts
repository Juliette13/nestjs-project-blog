import { Inject, Injectable } from "@nestjs/common";
import { ArticleRepository } from "./article.repository";

@Injectable()
export class ArticleService {
  constructor(
    @Inject(ArticleRepository)
    private readonly articleRepository: ArticleRepository
  ) {}

  // if user create article
  async deleteArticle(id: number) {
    this.articleRepository.delete(id);
  }
  /**
   * Returns all article
   *
   * @returns Resolves with Article
   **/
  async getAll() {
    return this.articleRepository.find();
  }

  /**
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   **/
  async getById(id: number) {
    return this.articleRepository.findOne(id);
  }
}
