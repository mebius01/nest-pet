import { AuthenticatedGuard } from './../../guards/authenticated.guard';
import { CreateBookDto, UpdateBookDto } from './books.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly service: BooksService) {}

  @Post()
  @UseGuards(AuthenticatedGuard)
  create(@Body() createBookDto: CreateBookDto) {
    return this.service.create(createBookDto);
  }

  @Get()
  list() {
    return this.service.list();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.get(id);
  }

  @Patch(':id')
  @UseGuards(AuthenticatedGuard)
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.service.update(id, updateBookDto);
  }

  @Delete(':id')
  @UseGuards(AuthenticatedGuard)
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
