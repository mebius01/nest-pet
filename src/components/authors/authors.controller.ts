import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly service: AuthorsService) {}

  //! --- admin ---
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.service.create(createAuthorDto);
  }

  @Get()
  list() {
    return this.service.list();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.get(id);
  }

  //! --- admin ---
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.service.update(id, updateAuthorDto);
  }

  //! --- admin ---
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
