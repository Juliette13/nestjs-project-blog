import { ArticleRepository } from "./article.repository";
import { ArticleService } from "./article.service";

describe("ArticleService", () => {
    let service: ArticleService;
    let repository: ArticleRepository;

    beforeAll(async () => {
        repository = {} as any;
        service = new ArticleService(repository);
    });
