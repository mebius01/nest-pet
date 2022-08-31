import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { AuthDal } from './auth.dal';
import { CreateAuthDto, RegistrationAuthDto } from './auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(private dal: AuthDal) {}
  registration(body: RegistrationAuthDto) {
    const user: CreateUserDto = new User();
    user.email = body.email;
    user.name = body.email.split('@')[0];

    const auth: CreateAuthDto = new Auth();
    //! --- add generation hash ---
    auth.password_hash = body.password;
    auth.user = user;

    //! --- create session ---
    return this.dal.registration(user, auth);
  }

  async login(body: RegistrationAuthDto) {
    const init = await this.dal.login(body.email);
    if (!init) throw new UnauthorizedException();
    if (init.password_hash !== body.password) throw new UnauthorizedException();

    //! --- create session ---
    return 'Ok';
  }

  logout() {
    return this.logout();
  }
}
