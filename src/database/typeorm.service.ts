import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      ...this.config.get('database.postgres'),
      entities: [__dirname + '/components/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*.js'],
      // migrationsDir: ['src/database/migrations/'],
      migrationsRun: false,
      logger: 'file',
      // synchronize: true, // never use TRUE in production!
    };
  }
}
