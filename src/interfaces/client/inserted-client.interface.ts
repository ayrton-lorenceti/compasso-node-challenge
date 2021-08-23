import { City } from '../../entities/city.entity';
import { Client } from "./client.interface";

export interface InsertedClient extends Client {
  "id": number;
  "fullName": string;
  "sex": string;
  "birthDate": Date;
  "age": number;
  "city": City;
}