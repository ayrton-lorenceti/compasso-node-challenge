import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ClientService } from '../../src/services/client.service';

import { Client as ClientEntity } from "../../src/entities/client.entity";

import { client } from "../mocks/services/client/client.mock";
import { insertedClient } from "../mocks/services/client/insertedClient.mock";
import { updateResult } from "../mocks/services/client/updateResult";

describe('ClientService', () => {
  const CLIENT_ID = 1;
  const CLIENT_NAME = "Ayrton";
  const NEW_CLIENT_NAME = "Daniel";

  const mockRepository = {
    save: jest.fn().mockResolvedValueOnce(insertedClient),
    findOne: jest.fn().mockResolvedValue(insertedClient),
    update: jest.fn().mockResolvedValue(updateResult),
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

  it("Should return a client by name", async () => {
    const response = await clientService.getByName(CLIENT_NAME);

    expect(response).toEqual(insertedClient);
  });

  it("Should update client's name", async () => {
    const response = await clientService.updateName(CLIENT_ID, NEW_CLIENT_NAME);

    expect(response).toEqual(updateResult);
  });
});
