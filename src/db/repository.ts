import { User } from 'src/components/users/entities/user.entity';
import { Auth } from 'src/components/auth/entities/auth.entity';
import { Book } from 'src/components/books/entities/book.entity';
import { Author } from 'src/components/authors/entities/author.entity';
import { Category } from 'src/components/categories/entities/categories.entity';

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
export const authRepository = createRepository(Auth, 'AUTH_REPOSITORY');
export const booksRepository = createRepository(Book, 'BOOK_REPOSITORY');
export const authorsRepository = createRepository(Author, 'AUTHOR_REPOSITORY');
export const categoriesRepository = createRepository(
  Category,
  'CATEGORY_REPOSITORY',
);
