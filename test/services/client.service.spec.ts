import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ClientService } from '../../src/services/client.service';

import { Client as ClientEntity } from "../../src/entities/client.entity";

import { client } from "../mocks/services/client/client.mock";
import { insertedClient } from "../mocks/services/client/insertedClient.mock";

describe('ClientService', () => {
  const CLIENT_ID = 1;

  const mockRepository = {
    save: jest.fn().mockResolvedValueOnce(insertedClient),
    findOne: jest.fn().mockResolvedValueOnce(insertedClient)
  }

  let clientService: ClientService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: getRepositoryToken(ClientEntity),
          useValue: mockRepository
        }
      ],
    }).compile();

    clientService = app.get<ClientService>(ClientService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  })

  it("Should create a new client", async () => {
    const response = await clientService.create(client);

    expect(response).toEqual(insertedClient);
  });

  it("Should return a client by id", async () => {
    const response = await clientService.getById(CLIENT_ID);

    expect(response).toEqual(insertedClient);
  });
});
