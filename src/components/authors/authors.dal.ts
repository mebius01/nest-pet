import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsDal {
  constructor(
    @Inject('AUTHOR_REPOSITORY')
    private repository: Repository<Author>,
  ) {}

  create(author: CreateAuthorDto): Promise<Author> {
    return this.repository.save(author);
  }

  list(): Promise<Author[]> {
    return this.repository.find();
  }

  get(id: string): Promise<Author> {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, author: UpdateAuthorDto): Promise<Author> {
    const data = await this.repository
      .createQueryBuilder()
      .update({
        ...author,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return data.raw[0];
  }

  async remove(id: string): Promise<Author> {
    const data = await this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return data.raw[0];
  }
}
