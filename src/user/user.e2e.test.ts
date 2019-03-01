import { HttpStatus, INestApplication } from "@nestjs/common"
import { Test } from "@nestjs/testing"
import * as request from "supertest"
import { getConnection } from "typeorm"
import { setupDB } from "../../test/tools/setup.tools"
import { JwtAuthGuard } from "../authentication/auth.guard";
import { AuthModule } from "../authentication/auth.module";
import { ISignIn } from "../authentication/auth.service";
import { User } from "./entity/user.entity";
import { UserModule } from "./user.module"
import { UserRepository } from "./user.repository"
import { UserService } from "./user.service";

describe("UserController (e2e)", () => {
    let app: INestApplication;
    let authToken : JwtAuthGuard;

    beforeAll(async () => {
        await setupDB()
        const moduleFixture = await Test.createTestingModule({
            imports: [UserModule, AuthModule],
        })
            .overrideProvider(UserService)
            .useValue(UserService)
            .compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    });

    it("should detect that we are not logged in", () => {
        return request(app.getHttpServer())
            .get("/auth/authorized")
            .expect(HttpStatus.UNAUTHORIZED);
    });

    it("disallow invalid credentials", async () => {
        const authInfo: ISignIn = {email: "mescouillesleendtoend", password: "badpass"};
        const response = await request(app.getHttpServer())
            .post("/auth/login")
            .send(authInfo);
        expect(response.status).toBe(HttpStatus.UNAUTHORIZED);
    });

    it("return an authorization token for valid credentials", async () => {
        const authInfo: ISignIn = {email: "mescouillesleendtoend", password: "goodpass"};
        const response = await request(app.getHttpServer())
            .post("/auth/login")
            .send(authInfo);
        expect(response.status).toBe(HttpStatus.OK);
        expect(response.body.user.username).toBe("auser");
        expect(response.body.user.firstName).toBe("Adam");
        expect(response.body.user.lastName).toBe("User");
        authToken = response.body.token;
    });

    it("should show that we are logged in", () => {
        return request(app.getHttpServer())
            .get("/auth/authorized")
            .set("Authorization", `Bearer ${authToken}`)
            .expect(HttpStatus.OK);
    });

    // describe("Create user", () => {
    //     it("/user/create", () => {
    //         const user = {
    //             firstName: "toto",
    //             lastName: "toto",
    //             avatar: "/src/coco.jpg",
    //             email: "nico.remise@jaimenestmaispasjuliette.com",
    //             mobilePhone: "0698892458",
    //             type: "admin",
    //             password: "haha"
    //         }
    //         return request(app.getHttpServer())
    //             .post("/user/create")
    //             .send(user)
    //             .expect(201)
    //     });
    // });

    describe("Get User", () => {
        it("/user/{id}", () => {
            const user: User = {
                userId: "monId",
                lastName: "Nom",
                firstName: "Prénom",
                avatar: "",
                mobilePhone: "0836656565",
                type: "Admin",
                updated: new Date(),
                created: new Date(),
                email: "a@a.a",
                password: "motDePasse",
                note: [],
                commentaire: [],
                article: []
            };
            return request(app.getHttpServer())
                .post("/user/:id")
                .send()
                .expect(200)
        });
    });

    // describe("Update user", () => {
    //     it("/user/updateById", () => {
    //         const user = {
    //             firstName: "toto",
    //             lastName: "toto",
    //             avatar: "/src/coco.jpg",
    //             email: "nico.remise@jaimenestmaispasjuliette.com",
    //             mobilePhone: "0698892458",
    //             type: "admin",
    //             password: "haha"
    //         }
    //         return request(app.getHttpServer())
    //             .put("/user/updateById")
    //             .send(user)
    //             .expect(201)
    //     });
    // });
    //
    // // TODO : Push us35
    // describe("Delete user", () => {
    //     it("/user/deleteUser", () => {
    //         const id = "monId";
    //         return request(app.getHttpServer())
    //             .delete("/User/deleteUser")
    //             .send(id)
    //             .expect(201)
    //     });
    // });

})
