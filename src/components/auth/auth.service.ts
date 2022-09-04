import { ID } from './../../utilities/id';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { AuthDal } from './auth.dal';
import { CreateAuthDto, RegistrationAuthDto } from './auth.dto';
import { Auth } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  private readonly salt: number = 10;
  constructor(private dal: AuthDal) {}

  async registration(body: RegistrationAuthDto) {
    const user: CreateUserDto = new User();

    user.id = ID('US')
    user.email = body.email;
    user.name = body.email.split('@')[0];

    const auth: CreateAuthDto = new Auth();
    const hash = await bcrypt.hash(body.password, this.salt);

    auth.password_hash = hash;
    auth.user = user;

    //! --- create session ---
    return this.dal.registration(user, auth);
  }

  async login(body: RegistrationAuthDto) {
    const init = await this.dal.login(body.email);
    if (!init) throw new UnauthorizedException();
    const hash = await bcrypt.compare(body.password, init.password_hash);
    if (!hash) throw new UnauthorizedException();

    //! --- create session ---
    return 'Ok';
  }

  logout() {
    return this.logout();
  }
}
