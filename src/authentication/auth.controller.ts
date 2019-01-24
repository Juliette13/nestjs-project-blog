import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { SignInDto } from "./models/sign-in.dto";
import { SignUpDto } from "./models/sign-up.dto";

@Controller("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  @ApiOperation({ title: "Sign in" })
  async signin(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }

  @Post("signup")
  @ApiOperation({ title: "Sign up" })
  async signup(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }
}
