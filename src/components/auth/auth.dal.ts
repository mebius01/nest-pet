import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { CreateAuthDto } from './auth.dto';
import { Auth } from './entities/auth.entity';
import { getUserAuth } from './sql/get-auth-user';

@Injectable()
export class AuthDal {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private authRepository: Repository<Auth>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async registration(user: CreateUserDto, auth: CreateAuthDto) {
    //! ----- add transaction! ------
    const data = await this.userRepository.save(user);
    await this.authRepository.save(auth);
    return data;
  }

  async login(email: string) {
    const data = await this.userRepository.query(getUserAuth, [email]);
    return data[0];
  }

  logout() {
    return `This action logout`;
  }
}
