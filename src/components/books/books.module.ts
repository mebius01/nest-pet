import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DatabaseModule } from 'src/db/db.module';
import { booksProviders } from 'src/db/repository';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [...booksProviders, BooksService],
})
export class BooksModule {}
