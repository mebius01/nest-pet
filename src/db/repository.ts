import { User } from 'src/components/users/entities/user.entity';
import { DataSource } from 'typeorm';

const createRepository = (entity: any, nameProvide: string) => {
  return [
    {
      provide: nameProvide,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(entity),
      inject: ['DATA_SOURCE'],
    },
  ];
};

// export const photoProviders = createRepository(Photo, 'PHOTO_REPOSITORY');
export const userProviders = createRepository(User, 'USER_REPOSITORY');
