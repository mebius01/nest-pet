import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DatabaseModule } from '../../db/db.module';
import { booksRepository } from '../../db/repository';
import { BooksDal } from './books.dal';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [...booksRepository, BooksService, BooksDal],
})
export class BooksModule {}
