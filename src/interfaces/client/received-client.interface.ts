import { Client } from "./client.interface";

export interface ReceivedClient extends Client {
  "fullName": string;
  "sex": string;
  "birthDate": Date;
  "age": number;
  "cityId": number;
}