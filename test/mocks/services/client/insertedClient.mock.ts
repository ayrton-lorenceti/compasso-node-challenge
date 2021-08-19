import { Client } from '../../../../src/interfaces/client/client.interface';

export const insertedClient: Client = {
  "id": 1,
  "fullName": "Ayrton Domingos Lorenceti",
  "sex": "Masculino",
  "birthDate": new Date("01/10/1996"),
  "age": 25,
  "city": {
    "id": 2,
    "name": "Chapecó",
    "uf": "SC"
  }
}