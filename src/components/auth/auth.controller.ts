import { Controller, Post, Body, Patch, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationAuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('registration')
  registration(@Body() body: RegistrationAuthDto) {
    return this.service.registration(body);
  }

  @Post('login')
  @HttpCode(204)
  login(@Body() body: RegistrationAuthDto) {
    return this.service.login(body);
  }

  @Patch('logout')
  logout() {
    return this.service.logout();
  }
}
