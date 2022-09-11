import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users_rols')
export class UsersRols {
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

  @OneToOne(() => UsersRols)
  @JoinColumn({ name: 'role_id' })
  role: UsersRols;
}
