import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { usersRepository } from 'src/db/repository';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...usersRepository, UserService],
})
export class UserModule {}
