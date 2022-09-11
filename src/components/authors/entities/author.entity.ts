import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 120, unique: true })
  name!: string;
}
