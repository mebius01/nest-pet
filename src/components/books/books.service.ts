import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private repository: Repository<Book>,
  ) {}

  create(body: CreateBookDto): Promise<Book> {
    const book: CreateBookDto = new Book();

    book.name = body.name;
    book.description = body.description;

    return this.repository.save(book);
  }

  get(id: string): Promise<Book> {
    return this.repository.findOneBy({ id });
  }

  list(): Promise<Book[]> {
    return this.repository.find();
  }

  async update(id: number, body: UpdateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.description = body.description;
    const result = await this.repository
      .createQueryBuilder()
      .update({
        ...book,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return result.raw[0];
  }

  async remove(id: number): Promise<Book> {
    const result = await this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return result.raw[0];
  }
}
