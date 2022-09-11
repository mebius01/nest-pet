import {
  Controller,
  Post,
  Body,
  Patch,
  UseGuards,
  Request,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationAuthDto } from './auth.dto';
import { LocalAuthGuard } from '../../guards/local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('registration')
  registration(@Body() body: RegistrationAuthDto) {
    return this.service.registration(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() body: RegistrationAuthDto) {
    return this.service.login(body);
  }

  @Patch('logout')
  @HttpCode(204)
  logout(@Request() req): any {
    req.logout((error) => {
      if (error) req.session.destroy();
    });
  }
}
