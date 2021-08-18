import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { City } from './city.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 200,
    nullable: false
  })
  fullName: string;

  @Column({
    length: 5,
    nullable: false
  })
  sex: string;

  @Column({
    type: 'date',
    nullable: false
  })
  birthDate: Date;

  @Column({
    nullable: false
  })
  age: number;

  @ManyToOne(
    () => City, (City) => City.id, { onUpdate: 'CASCADE', onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'city' })
  city: City;
}