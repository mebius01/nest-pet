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

  @Column({ type: 'varchar', length: 120, unique: true, nullable: true })
  name!: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @ManyToOne(() => User, (user) => user.books)
  user: User;

  @ManyToMany(() => Author)
  @JoinTable()
  authors: Author[];

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];
}
