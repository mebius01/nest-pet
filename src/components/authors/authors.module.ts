import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { authorsRepository } from '../../db/repository';
import { DatabaseModule } from '../../db/db.module';
import { AuthorsDal } from './authors.dal';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [...authorsRepository, AuthorsService, AuthorsDal],
})
export class AuthorsModule {}
