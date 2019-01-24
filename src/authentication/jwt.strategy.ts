import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { configService } from "../config/config.service";
import { Strategy, ExtractJwt } from "passport-jwt";
import { AuthService, ITokenPayload } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.getString("SECRET_KEY")
    });
  }

  async validate(payload: ITokenPayload) {
    const user = await this.authService.validateTokenPayload(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
