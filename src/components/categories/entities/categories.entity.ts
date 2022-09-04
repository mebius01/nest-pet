import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'varchar', length: 120, unique: true, nullable: true })
  name!: string;

  @Column({ type: 'text' })
  description: string;
}
