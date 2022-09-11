import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAuthorDto {
  @IsString()
  name: string;
}

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
