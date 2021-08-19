import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { City as CityEntity } from './city.entity';

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
    length: 10,
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
    type => CityEntity, city => city.id, { 
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE', 
      nullable: false, 
      eager: true 
    }
  )
  @JoinTable()
  city: CityEntity;
}