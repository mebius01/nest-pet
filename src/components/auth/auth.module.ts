import { SessionSerializer } from './../../utilities/passport/session.serializer';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from '../../db/db.module';
import {
  authRepository,
  usersRepository,
  usersRolsRepository,
} from '../../db/repository';
import { AuthDal } from './auth.dal';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthStrategy } from '../../utilities/passport/local.strategy';

@Module({
  imports: [DatabaseModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [
    ...authRepository,
    ...usersRepository,
    ...usersRolsRepository,
    AuthService,
    AuthDal,
    LocalAuthStrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
