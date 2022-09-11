import * as dotenv from 'dotenv';
dotenv.config();

export const ormConfig = {
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT) || 5432,
  database: process.env.TYPEORM_DATABASE || 'library_local',
  username: process.env.TYPEORM_USERNAME || 'user',
  password: process.env.TYPEORM_PASSWORD || '1234',
  synchronize: false,
  logging: false,
  entities: ['dist/src/components/**/entities/*.entity{.ts,.js}'],
  migrations: ['dist/src/db/migrations/*{.ts,.js}'],
  subscribers: [],
};
