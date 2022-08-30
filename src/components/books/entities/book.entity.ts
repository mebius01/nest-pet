import { User } from 'src/components/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne((type) => User, (user) => user.books)
  user: User;
}
