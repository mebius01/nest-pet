import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private repository: Repository<Category>,
  ) {}

  create(body: CreateCategoryDto): Promise<Category> {
    const category: CreateCategoryDto = new Category();

    category.name = body.name;
    category.description = body.description;

    return this.repository.save(category);
  }

  get(id: number): Promise<Category> {
    return this.repository.findOneBy({ id });
  }

  list(): Promise<Category[]> {
    return this.repository.find();
  }

  async update(id: number, body: UpdateCategoryDto): Promise<Category> {
    const category: Category = new Category();

    category.name = body.name;
    category.description = body.description;

    const result = await this.repository
      .createQueryBuilder()
      .update({
        ...category,
      })
      .where({
        id,
      })
      .returning('*')
      .execute();
    return result.raw[0];
  }

  async remove(id: number): Promise<Category> {
    const result = await this.repository
      .createQueryBuilder()
      .delete()
      .where({ id })
      .returning('*')
      .execute();
    return result.raw[0];
  }
}
