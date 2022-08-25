import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  create(body: CreateUserDto) {
    const user: User = new User();

    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }

  list() {
    return this.repository.find();
  }

  get(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, body: UpdateUserDto) {
    const user: User = new User();
    user.name = body.name;
    const result = this.repository
      .createQueryBuilder()
      .update({
        ...user,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return result;
  }

  remove(id: number) {
    const result = this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return result;
  }
}
