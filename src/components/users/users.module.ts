import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { usersProviders } from 'src/db/repository';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...usersProviders, UserService],
})
export class UserModule {}
