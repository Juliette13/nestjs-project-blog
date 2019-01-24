import { Test, TestingModule } from "@nestjs/testing";
import { CommentaireController } from "./commentaire.controller";

describe("Commentaire Controller", () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CommentaireController]
    }).compile();
  });
  it("should be defined", () => {
    const controller: CommentaireController = module.get<CommentaireController>(
      CommentaireController
    );
    expect(controller).toBeDefined();
  });
});
