import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { authorsProviders } from 'src/db/repository';
import { DatabaseModule } from 'src/db/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [...authorsProviders, AuthorsService],
})
export class AuthorsModule {}
