import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PingController } from './app.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
// import { UserModule } from './components/users/users.module';
// import { AuthModule } from './components/auth/auth.module';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // UserModule,
    // AuthModule,
  ],
  controllers: [PingController],
  providers: [{ provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
