import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PingController } from './app.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UserModule } from './components/users/users.module';
import { BooksModule } from './components/books/books.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, BooksModule],
  controllers: [PingController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
