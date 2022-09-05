import { AppDataSource } from 'config/data-source';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return AppDataSource.initialize();
    },
  },
];
