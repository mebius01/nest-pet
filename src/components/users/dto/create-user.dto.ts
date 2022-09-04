import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;
}
