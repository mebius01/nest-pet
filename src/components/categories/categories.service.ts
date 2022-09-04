import { Injectable } from '@nestjs/common';
import { CategoryDal } from './categories.dal';
import { CreateCategoryDto, UpdateCategoryDto } from './categories.dto';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly dal: CategoryDal) {}

  create(category: CreateCategoryDto): Promise<Category> {
    return this.dal.create(category);
  }

  get(id: string): Promise<Category> {
    return this.dal.get(id);
  }

  list(): Promise<Category[]> {
    return this.dal.list();
  }

  async update(id: string, category: UpdateCategoryDto): Promise<Category> {
    const data = await this.dal.update(id, category);
    return data;
  }

  async remove(id: string): Promise<Category> {
    const data = await this.dal.remove(id);
    return data;
  }
}
