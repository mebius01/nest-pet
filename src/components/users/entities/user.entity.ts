import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: 'varchar', length: 120 })
	name: string;

	@Column({ type: 'varchar', length: 120 })
	email: string;
}
