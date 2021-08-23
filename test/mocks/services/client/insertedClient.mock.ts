import { InsertedClient } from '../../../../src/interfaces/client/inserted-client.interface';

export const insertedClient: InsertedClient = {
  "id": 1,
  "fullName": "Ayrton Domingos Lorenceti",
  "sex": "Masculino",
  "birthDate": new Date("01/10/1996"),
  "age": 25,
  "city": {
    "id": 1,
    "name": "Chapecó",
    "uf": "SC"
  }
}