import { User, UsersRols } from '../components/users/entities/user.entity';
import { Auth } from '../components/auth/entities/auth.entity';

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

export const authRepository = createRepository(Auth, 'AUTH_REPOSITORY');
export const usersRepository = createRepository(User, 'USER_REPOSITORY');
export const usersRolsRepository = createRepository(
  UsersRols,
  'USER_ROLS_REPOSITORY',
);
