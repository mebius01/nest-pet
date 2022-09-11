import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBookDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}

export class BookDto extends CreateBookDto {
  @IsString()
  id: string;
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
