import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CityService } from '../../src/services/city.service';

import { City as CityEntity } from "../../src/entities/city.entity";

import { city } from "../mocks/services/city/city.mock";
import { cityWithWrongUF } from "../mocks/services/city/city-with-wrong-UF.mock";
import { insertedCity } from "../mocks/services/city/inserted-city.mock";
import { invalidUF } from "../mocks/services/city/invalid-uf.mock";

describe('CityService', () => {
  const CITY_NAME = "Chapecó";
  const INVALID_UF = "AAA";
  const UF = "SC";
  
  const mockRepository = {
    save: jest.fn().mockResolvedValueOnce(insertedCity),
    findOne: jest.fn().mockResolvedValue(insertedCity)
  }

  let cityService: CityService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: getRepositoryToken(CityEntity),
          useValue: mockRepository
        }
      ],
    }).compile();

    cityService = app.get<CityService>(CityService);
  });

  it("Should create a new city", async () => {
    const response = await cityService.create(city);

    expect(response).toEqual(insertedCity);
  });

  it("Should return a city by name", async () => {
    const response = await cityService.getByName(CITY_NAME);

    expect(response).toEqual(insertedCity);
  });

  it("Should return a city by name and by state", async () => {
    const response = await cityService.getByUF(CITY_NAME, UF);

    expect(response).toEqual(insertedCity);
  });

  it("Should return 400 when trying to insert a city with invalid UF", async () => {
    try {
      await cityService.create(cityWithWrongUF);  
    } catch (error) {
      expect(error).toEqual(invalidUF);  
    }
  });

  it("Should return 400 when trying to get a city by name and by state with invalid UF", async () => {
    try {
      await cityService.getByUF(CITY_NAME, INVALID_UF);
    } catch (error) {
      expect(error).toEqual(invalidUF);  
    }
  });
  
});
