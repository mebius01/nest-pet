import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Auth } from '../auth/entities/auth.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserDal {
  constructor(
    @Inject('USER_REPOSITORY')
    private repository: Repository<User>,
  ) {}

  get(id: string): Promise<User> {
    return this.repository.findOneBy({ id });
  }

  list(): Promise<User[]> {
    return this.repository.find();
  }

  async update(id: string, user: UpdateUserDto): Promise<User> {
    const data = await this.repository
      .createQueryBuilder()
      .update({
        ...user,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return data.raw[0];
  }

  async remove(id: string): Promise<User> {
    const data = await this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return data.raw[0];
  }
}
