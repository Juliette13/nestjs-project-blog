import { INestApplication } from "@nestjs/common"
import { Test } from "@nestjs/testing"
import * as request from "supertest"
import { getConnection } from "typeorm"
import { setupDB } from "../../test/tools/setup.tools"
import { UserModule } from "./user.module"
import { UserRepository } from "./user.repository"
import { UserService } from "./user.service";

describe("UserController (e2e)", () => {
    let app: INestApplication;
    const userService = { create: () => ["user"]}

    beforeAll(async () => {
        await setupDB()
        const moduleFixture = await Test.createTestingModule({
            imports: [UserModule],
        })
            .overrideProvider(UserService)
            .useValue(UserService)
            .compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    describe("Create user", () => {
        it("/user/create", () => {
            const user = {
                firstName: "toto",
                lastName: "toto",
                avatar: "/src/coco.jpg",
                email: "nico.remise@jaimenestmaispasjuliette.com",
                mobilePhone: "0698892458",
                type: "admin",
                password: "haha"
            }
            return request(app.getHttpServer())
                .post("/user/create")
                .send(user)
                .expect(201)
                .expect({
                    data: userService.create(),
                });
        });
    });

    describe("Update user", () => {
        it("/user/updateById", () => {
            const user = {
                firstName: "toto",
                lastName: "toto",
                avatar: "/src/coco.jpg",
                email: "nico.remise@jaimenestmaispasjuliette.com",
                mobilePhone: "0698892458",
                type: "admin",
                password: "haha"
            }
            return request(app.getHttpServer())
                .put("/user/updateById")
                .send(user)
                .expect(201)
        });
    });

    // TODO : Push us35
    describe("Delete user", () => {
        it("/user/deleteUser", () => {
            const id = "monId";
            return request(app.getHttpServer())
                .delete("/User/deleteUser")
                .send(id)
                .expect(201)
        });
    });

})
