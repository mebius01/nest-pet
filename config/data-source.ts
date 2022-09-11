import { DataSource } from 'typeorm';
import { ormConfig } from './config.typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  ...ormConfig,
});
