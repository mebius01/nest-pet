import { DataSource } from 'typeorm';
import { ormConfig } from './typeorm.config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  ...ormConfig,
});
