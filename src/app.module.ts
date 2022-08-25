import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'config/configuration';
import { PingController } from './app.controller';
import { TypeOrmConfigService } from './db/typeorm.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersModule } from './components/users/users.module';
import { CategoriesModule } from './components/categories/categories.module';
import { AuthorsModule } from './components/authors/authors.module';
import { BooksModule } from './components/books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UsersModule,
    CategoriesModule,
    AuthorsModule,
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
