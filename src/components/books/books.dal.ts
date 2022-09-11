import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBookDto, UpdateBookDto } from './books.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksDal {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private repository: Repository<Book>,
  ) {}

  create(book: CreateBookDto): Promise<Book> {
    return this.repository.save(book);
  }

  get(id: string): Promise<Book> {
    return this.repository.findOneBy({ id });
  }

  list(): Promise<Book[]> {
    return this.repository.find();
  }

  async update(id: string, book: UpdateBookDto): Promise<Book> {
    const data = await this.repository
      .createQueryBuilder()
      .update({
        ...book,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return data.raw[0];
  }

  async remove(id: string): Promise<Book> {
    const data = await this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return data.raw[0];
  }
}
