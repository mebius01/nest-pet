import { SessionSerializer } from './../../utilities/passport/session.serializer';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/db/db.module';
import { authRepository, usersRepository } from 'src/db/repository';
import { AuthDal } from './auth.dal';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthStrategy } from 'src/utilities/passport/local.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [AuthController],
  providers: [
    ...authRepository,
    ...usersRepository,
    AuthService,
    AuthDal,
    LocalAuthStrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
