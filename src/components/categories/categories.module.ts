import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { categoriesProviders } from 'src/db/repository';
import { CategoryController } from './categories.controller';
import { CategoryService } from './categories.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoriesProviders, CategoryService],
})
export class CategoryModule {}
