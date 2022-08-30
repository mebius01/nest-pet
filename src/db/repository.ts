import { Book } from 'src/components/books/entities/book.entity';
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

export const booksProviders = createRepository(Book, 'BOOK_REPOSITORY');
export const usersProviders = createRepository(User, 'USER_REPOSITORY');
