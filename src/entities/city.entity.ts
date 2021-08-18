import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    unique: true,
    nullable: false
  })
  name: string;

  @Column({
    length: 100,
    nullable: false
  })
  uf: string;
}