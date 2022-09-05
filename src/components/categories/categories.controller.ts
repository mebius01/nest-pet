import { AuthenticatedGuard } from './../../guards/authenticated.guard';
import { CreateCategoryDto, UpdateCategoryDto } from './categories.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './categories.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  //! --- admin ---
  @Post()
  create(@Body() body: CreateCategoryDto) {
    return this.service.create(body);
  }

  @Get()
  list() {
    return this.service.list();
  }

  @Get(':id')
  @UseGuards(AuthenticatedGuard)
  get(@Param('id') id: string) {
    return this.service.get(id);
  }

  //! --- admin ---
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
    return this.service.update(id, body);
  }

  //! --- admin ---
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
