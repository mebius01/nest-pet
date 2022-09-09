import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../db/db.module';
import { categoriesRepository } from '../../db/repository';
import { CategoryController } from './categories.controller';
import { CategoryDal } from './categories.dal';
import { CategoryService } from './categories.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoriesRepository, CategoryService, CategoryDal],
})
export class CategoryModule {}
