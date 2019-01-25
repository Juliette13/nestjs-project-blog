import { Test, TestingModule } from "@nestjs/testing";
import { User } from "./entity/user.entity";
import { UpdateUserDto } from "./models/UpdateUserDto";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

describe("User Controller", () => {
  let controller: UserController;
  let service: UserService;

  beforeAll(async () => {
    service = {} as any;
    controller = new UserController(service);
  });

  describe("getById", () => {
    it("should return the result of service.getById", async () => {
      const id = "monId";
      const user = { name: "toto" };
      service.getById = jest.fn().mockResolvedValue(user);
      const result = await controller.getById(id);
      expect(result).toBe(user);
      expect(service.getById).toHaveBeenCalledWith(id);
    });
  });

    describe("getAllUser", () => {
      it("should return the result of service.getAllUser", async () => {
        const user = ["User"];
        service.getAll = jest.fn().mockResolvedValue(user);
          const result = await controller.getAllUser();
          expect(result).toBe(user);
      });
    });

    describe("updateById", () => {
        it("should return the result of service.updateById", async () => {
            const id = "monId";
            const userUpdate: UpdateUserDto = {
                firstName: "toto",
                lastName: "toto",
                avatar: "/src/coco.jpg",
                email: "nico.remise@jaimenestmaispasjuliette.com",
                mobilePhone: "0698892458",
                type: "admin",
                password: "haha"};

            service.updateUser = jest.fn().mockResolvedValue(userUpdate);
            const result =  await controller.updateById(id, userUpdate);
            expect(result).toBe(userUpdate);
            expect(service.updateUser).toHaveBeenCalledWith(id, userUpdate);

        });
    });
});
