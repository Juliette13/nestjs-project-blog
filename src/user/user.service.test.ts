import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

describe("UserService", () => {
  let service: UserService;
  let repository: UserRepository;

  beforeAll(async () => {
    repository = {} as any;
    service = new UserService(repository);
  });

  describe("getById", () => {
    it("should call and return repository.findOne with id passed in param", async () => {
      const id = "monId";
      const user = { name: "toto" };
      repository.findOne = jest.fn().mockResolvedValue(user);

      const result = await service.getById(id);

      expect(result).toBe(user);
      expect(repository.findOne).toHaveBeenCalledWith(id);
    });
  });

    describe("create", () => {
        it("should call and return repository.save", async () => {
            const user = { email: "nicoco_coucou@gmail.zbing" };
            repository.save = jest.fn().mockResolvedValue(user);

            const result = await service.create(user as any);

            expect(result).toBe(user);
            expect(repository.save).toHaveBeenCalledWith(user);
        });
    });

    describe("deleteUser", () => {
        it("should call repository.deleteUser", async () => {
            const id = "monId";
            const user = { name: "toto" };
            repository.delete = jest.fn().mockResolvedValue(user);

            const result = await service.deleteUser(id);

            expect(result).toBe(user);
            expect(repository.delete).toHaveBeenCalledWith(id);
        });
    });

    describe("getAll", () => {
        it("should call and return repository.find", async () => {
            const users = [
                { name: "Relou" },
                { name: "Remise"}
            ];
            repository.find = jest.fn().mockResolvedValue(users);

            const result = await service.getAll();

            expect(result).toBe(users);
            expect(repository.find).toHaveBeenCalled();
        });
    });

    describe("update", () => {
        it("should call and return repository.update", async () => {
            const user = { name: "toto" };
            const id = "monId";
            repository.update = jest.fn().mockResolvedValue(user);

            const result = await service.updateUser(id, user as any);

            expect(result).toEqual(user);
            expect(repository.update).toHaveBeenCalledWith(id, user);
        });
    });

});
