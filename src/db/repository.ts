import { User, UsersRols } from '../components/users/entities/user.entity';
import { Auth } from '../components/auth/entities/auth.entity';
import { Book } from '../components/books/entities/book.entity';
import { Author } from '../components/authors/entities/author.entity';
import { Category } from '../components/categories/entities/categories.entity';

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

export const usersRepository = createRepository(User, 'USER_REPOSITORY');
export const usersRolsRepository = createRepository(
  UsersRols,
  'USER_ROLS_REPOSITORY',
);
export const authRepository = createRepository(Auth, 'AUTH_REPOSITORY');
export const booksRepository = createRepository(Book, 'BOOK_REPOSITORY');
export const authorsRepository = createRepository(Author, 'AUTHOR_REPOSITORY');
export const categoriesRepository = createRepository(
  Category,
  'CATEGORY_REPOSITORY',
);
