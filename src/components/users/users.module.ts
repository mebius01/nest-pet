import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../db/db.module';
import { usersRepository } from '../../db/repository';
import { UserDal } from './users.dal';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...usersRepository, UserService, UserDal],
})
export class UserModule {}
