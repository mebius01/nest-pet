import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDal } from './users.dal';
import { UpdateUserDto } from './users.dto';

@Injectable()
export class UserService {
  constructor(private readonly dal: UserDal) {}

  get(id: string): Promise<User> {
    return this.dal.get(id);
  }

  list(): Promise<User[]> {
    return this.dal.list();
  }

  async update(id: string, body: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.name = body.name;
    const data = await this.dal.update(id, user);
    return data;
  }

  async remove(id: string): Promise<User> {
    const data = await this.dal.remove(id);
    return data;
  }
}
