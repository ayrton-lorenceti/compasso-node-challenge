import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CityService } from '../../src/services/city.service';

import { City as CityEntity } from "../../src/entities/city.entity";

import { city } from "../mocks/services/city.mock";
import { createdCity } from "../mocks/services/created-city.mock";

describe('CityService', () => {
  const CITY_NAME = "Chapecó";
  const mockRepository = {
    save: jest.fn().mockResolvedValueOnce(createdCity),
    findOne: jest.fn().mockResolvedValueOnce(createdCity)
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

    expect(response).toEqual(createdCity);
  });

  it("Should return a city by name", async () => {
    const response = await cityService.getByName(CITY_NAME);

    expect(response).toEqual(createdCity);
  });
});
