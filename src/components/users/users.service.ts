import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  create(body: CreateUserDto): Promise<User> {
    const user: CreateUserDto = new User();

    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, body: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.name = body.name;
    const result = await this.repository
      .createQueryBuilder()
      .update({
        ...user,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return result.raw[0];
  }

  async remove(id: number): Promise<User> {
    const result = await this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return result.raw[0];
  }
}
