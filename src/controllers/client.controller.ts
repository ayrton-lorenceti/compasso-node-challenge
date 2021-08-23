import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

import { ClientService } from "../services/client.service";

import { Client } from '../interfaces/client/client.interface';
import { InsertedClient } from '../interfaces/client/inserted-client.interface';
import { ReceivedClient } from '../interfaces/client/received-client.interface';

@Controller("client")
export class ClientController {
  constructor(
    private readonly clientService: ClientService
  ) { }

  @Post()
  @HttpCode(201)
  create(
    @Body() client: ReceivedClient
  ): Promise<InsertedClient> {
    return this.clientService.create(client);
  }

  @Get("/id/:id")
  @HttpCode(200)
  getById(
    @Param("id") id: number
  ): Promise<InsertedClient> {
    return this.clientService.getById(id);
  }

  @Get("/fullname/:fullname")
  @HttpCode(200)
  getByName(
    @Param("fullname") fullName: string
  ): Promise<InsertedClient> {
    return this.clientService.getByName(fullName);
  }

  @Patch("/id/:id")
  @HttpCode(204)
  updateName(
    @Body() client: { fullName: string },
    @Param("id") id: number
  ) {
    return this.clientService.updateName(id, client.fullName);
  }

  @Delete("/id/:id")
  @HttpCode(204)
  delete(
    @Param("id") id: number
  ) {
    return this.clientService.delete(id);
  }
}
