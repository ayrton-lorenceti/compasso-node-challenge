import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

import { ClientService } from "../services/client.service";

import { Client } from '../interfaces/client/client.interface';

@Controller("client")
export class ClientController {
  constructor(
    private readonly clientService: ClientService
  ) { }

  @Post()
  @HttpCode(201)
  create(@Body() client: Client): Promise<Client> {
    client.birthDate = new Date(client.birthDate);

    return this.clientService.create(client);
  }

  @Get(":id")
  @HttpCode(200)
  getById(@Param("id") id: number): Promise<Client> {
    return this.clientService.getById(id);
  }

  @Get()
  getByName() {
    return "";
  }

  @Patch()
  updateName() {
    return "";
  }

  @Delete()
  delete() {
    return "";
  }
}
