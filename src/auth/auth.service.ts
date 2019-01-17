import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { IJwtPayload } from "./interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(): Promise<string> {
    const user: IJwtPayload = { email: "", password: "" };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: IJwtPayload): Promise<any> {
    return await this.userService.authenticate(payload.email, payload.password);
  }
}
