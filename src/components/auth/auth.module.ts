import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/db/db.module';
import { authProviders, usersProviders } from 'src/db/repository';
import { AuthDal } from './auth.dal';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [...authProviders, ...usersProviders, AuthService, AuthDal],
})
export class AuthModule {}
