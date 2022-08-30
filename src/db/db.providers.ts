import { AppDataSource } from 'config/data-source';
import { DataSource } from 'typeorm';

export const databaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			return AppDataSource.initialize();
		},
	},
];
