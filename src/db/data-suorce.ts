import { Author } from 'src/components/authors/entities/author.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'library_local',
  username: 'user',
  password: '1234',
  synchronize: false,
  logging: false,
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  entities: [Author],
  migrations: ['src/db/migrations/*.ts'],
  subscribers: [],
});
