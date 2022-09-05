import { User } from 'src/components/users/entities/user.entity';
import { Author } from 'src/components/authors/entities/author.entity';
import { Category } from 'src/components/categories/entities/categories.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 120, unique: true })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => User, (user) => user.books, { onDelete: 'CASCADE' })
  user: User;

  @ManyToMany(() => Author, { onDelete: 'CASCADE' })
  @JoinTable()
  authors: Author[];

  @ManyToMany(() => Category, { onDelete: 'CASCADE' })
  @JoinTable()
  categories: Category[];
}
