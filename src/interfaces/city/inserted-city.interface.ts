import { City } from "./city.interface";

export interface InsertedCity extends City {
  id?: number;
  name: string;
  uf: string;
}