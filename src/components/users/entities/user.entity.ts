import { Book } from 'src/components/books/entities/book.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('rols')
export class Rols {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', default: 'user' })
  role: string;
}

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 120 })
  name!: string;

  @Column({ type: 'varchar', length: 120, unique: true })
  email!: string;

  @OneToOne(() => Rols)
  @JoinColumn({ name: 'role_id' })
  role: Rols;

  @OneToMany(() => Book, (book) => book.user, { cascade: true })
  books: Book[];
}
