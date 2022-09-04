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

  @Column({ type: 'varchar' })
  password_hash: string;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
}
