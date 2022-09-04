import { Book } from 'src/components/books/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 120, unique: true, nullable: true })
  name!: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  email!: string;

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];
}
