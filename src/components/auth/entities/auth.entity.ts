import { User } from 'src/components/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password_hash: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
