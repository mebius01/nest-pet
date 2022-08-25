import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/components/users/entities/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      ...this.config.get('database.postgres'),
      entities: [User],
      migrations: ['dist/migrations/*.js'],
      migrationsRun: false,
      logger: 'file',
      synchronize: true, // never use TRUE in production!
    };
  }
}
