import { City } from '../../entities/city.entity';

export interface Client {
  "id"?: number;
  "fullName": string;
  "sex": string;
  "birthDate": Date;
  "age": number;
  "city": City;
}