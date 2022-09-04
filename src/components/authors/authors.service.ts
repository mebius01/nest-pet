import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';
import { AuthorsDal } from './authors.dal';
import { Injectable } from '@nestjs/common';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(private readonly dal: AuthorsDal) {}

  create(body: CreateAuthorDto): Promise<Author> {
    const author: CreateAuthorDto = new Author();
    author.name = body.name;
    return this.dal.create(author);
  }

  list(): Promise<Author[]> {
    return this.dal.list();
  }

  get(id: string): Promise<Author> {
    return this.dal.get(id);
  }

  async update(id: string, body: UpdateAuthorDto): Promise<Author> {
    const author: Author = new Author();
    author.name = body.name;
    const data = await this.dal.update(id, author);
    return data;
  }

  async remove(id: string): Promise<Author> {
    const data = await this.dal.remove(id);
    return data;
  }
}
