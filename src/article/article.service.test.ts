import { ArticleRepository } from "./article.repository";
import { ArticleService } from "./article.service";

describe("ArticleService", () => {
    let service: ArticleService;
    let repository: ArticleRepository;

    beforeAll(async () => {
        repository = {} as any;
        service = new ArticleService(repository);
    });

    describe("getById", () => {
        it("should call and return repository.findOne with id passed in param", async () => {
            const id = 1;
            const article = {title: "weekend in tokyo"};
            repository.findOne = jest.fn().mockResolvedValue(article);

            const result = await service.getById(id);

            expect(result).toBe(article);
            expect(repository.findOne).toHaveBeenCalledWith(id);
        });
    });

    describe("updateArticle", () => {
        it("should call and return repository.updateArticle", async () => {
            const article = { title: "weekend in tokyo" };
            const id = 1;
            repository.update = jest.fn().mockResolvedValue(article);

            const result = await service.updateArticle(id, article as any);

            expect(result).toEqual(article);
            expect(repository.update).toHaveBeenCalledWith(id, article);
        });
    });

    describe("deleteArticle", () => {
        it("should call repository.deleteArticle", async () => {
            const id = 1;
            const article = { title: "weekend in tokyo" };
            repository.delete = jest.fn().mockResolvedValue(article);

            const result = await service.deleteArticle(id);

            expect(result).toBe(article);
            expect(repository.delete).toHaveBeenCalledWith(id);
        });
    });

    describe("getAll", () => {
        it("should call and return repository.find", async () => {
            const articles = [
                { title: "weekend in tokyo" },
                { name: "le nest c complique mais on na pas le choix"}
            ];
            repository.find = jest.fn().mockResolvedValue(articles);

            const result = await service.getAll();

            expect(result).toBe(articles);
            expect(repository.find).toHaveBeenCalled();
        });
    });

});
