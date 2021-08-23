import { City } from '../../entities/city.entity';
import { Client } from "./client.interface";

export interface PreInsertedClient extends Client {
  "fullName": string;
  "sex": string;
  "birthDate": Date;
  "age": number;
  "city": City;
}