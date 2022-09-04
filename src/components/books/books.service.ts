import { BooksDal } from './books.dal';
import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { ID } from 'src/utilities/id';
import { BookDto, CreateBookDto, UpdateBookDto } from './books.dto';

@Injectable()
export class BooksService {
  constructor(private readonly dal: BooksDal) {}

  create(body: CreateBookDto): Promise<Book> {
    const book: BookDto = new Book();

    //! --- add user ---
    book.id = ID('BK');
    book.name = body.name;
    book.description = body.description;

    return this.dal.create(book);
  }

  get(id: string): Promise<Book> {
    return this.dal.get(id);
  }

  list(): Promise<Book[]> {
    return this.dal.list();
  }

  async update(id: string, body: UpdateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.description = body.description;
    const data = await this.dal.update(id, book);
    return data;
  }

  async remove(id: string): Promise<Book> {
    const data = await this.dal.remove(id);
    return data;
  }
}
