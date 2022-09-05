import { UsersRols } from './../users/entities/user.entity';
import { UserDto } from './../users/users.dto';
import { ID } from './../../utilities/id';
import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const rols = await this.dal.rols();
    const user = new User();

    user.id = ID('US');
    user.email = body.email;
    user.name = body.email.split('@')[0];
    user.role = rols;

    const auth: CreateAuthDto = new Auth();
    const hash = await bcrypt.hash(body.password, this.salt);

    auth.password_hash = hash;
    auth.user = user;

    return this.dal.registration(user, auth);
  }

  async login(body: RegistrationAuthDto) {
    const init = await this.dal.login(body.email);
    if (!init) throw new UnauthorizedException();
    const hash = await bcrypt.compare(body.password, init.password_hash);
    if (!hash) throw new UnauthorizedException();

    const { password_hash, ...user } = init;
    return user;
  }
}
