import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PingController } from './app.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ormConfig } from 'config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'config/.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        ...ormConfig,
      }),
    }),
  ],
  controllers: [PingController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
