import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from './categories.dto';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoryDal {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private repository: Repository<Category>,
  ) {}

  create(category: CreateCategoryDto): Promise<Category> {
    return this.repository.save(category);
  }

  get(id: string): Promise<Category> {
    return this.repository.findOneBy({ id });
  }

  list(): Promise<Category[]> {
    return this.repository.find();
  }

  async update(id: string, category: UpdateCategoryDto): Promise<Category> {
    const data = await this.repository
      .createQueryBuilder()
      .update({
        ...category,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return data.raw[0];
  }

  async remove(id: string): Promise<Category> {
    const data = await this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return data.raw[0];
  }
}
