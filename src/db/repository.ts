import { Auth } from 'src/components/auth/entities/auth.entity';
import { Author } from 'src/components/authors/entities/author.entity';
import { Book } from 'src/components/books/entities/book.entity';
import { Category } from 'src/components/categories/entities/categories.entity';
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

export const usersProviders = createRepository(User, 'USER_REPOSITORY');
export const booksProviders = createRepository(Book, 'BOOK_REPOSITORY');
export const authorsProviders = createRepository(Author, 'AUTHOR_REPOSITORY');
export const categoriesProviders = createRepository(
  Category,
  'CATEGORY_REPOSITORY',
);
export const authProviders = createRepository(Auth, 'AUTH_REPOSITORY');
