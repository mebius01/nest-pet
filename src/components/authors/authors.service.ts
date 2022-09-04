import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject('AUTHOR_REPOSITORY')
    private repository: Repository<Author>,
  ) {}

  create(body: CreateAuthorDto): Promise<Author> {
    const author: CreateAuthorDto = new Author();
    author.name = body.name;
    return this.repository.save(author);
  }

  list(): Promise<Author[]> {
    return this.repository.find();
  }

  get(id: string): Promise<Author> {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, body: UpdateAuthorDto): Promise<Author> {
    const author: Author = new Author();
    author.name = body.name;
    const result = await this.repository
      .createQueryBuilder()
      .update({
        ...author,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return result.raw[0];
  }

  async remove(id: string): Promise<Author> {
    const result = await this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return result.raw[0];
  }
}
