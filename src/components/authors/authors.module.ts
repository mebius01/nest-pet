import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { authorsRepository } from 'src/db/repository';
import { DatabaseModule } from 'src/db/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [...authorsRepository, AuthorsService],
})
export class AuthorsModule {}
