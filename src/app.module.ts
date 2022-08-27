import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PingController } from './app.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ormConfig } from 'config/typeorm.config';
import { UsersModule } from './components/users/users.module';
import { BooksModule } from './components/books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        ...ormConfig,
      }),
    }),
    UsersModule,
    BooksModule,
  ],
  controllers: [PingController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
