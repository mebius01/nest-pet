import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
