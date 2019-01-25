import { INestApplication } from "@nestjs/common"
import { Test } from "@nestjs/testing"
import * as request from "supertest"
import { getConnection } from "typeorm"
import { setupDB } from "../../test/tools/setup.tools"
import { UserModule } from "./user.module"
import { UserRepository } from "./user.repository"

describe("UserController (e2e)", () => {
    let app: INestApplication

    beforeAll(async () => {
        await setupDB()
        const moduleFixture = await Test.createTestingModule({
            imports: [UserModule],
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    afterAll(async () => {
        await app.get(UserRepository).delete({})
        await app.close()
        await getConnection().close()
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
        })
    })
})
