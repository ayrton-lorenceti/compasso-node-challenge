import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller()
export class ClientController {
  constructor() { }

  @Post()
  create() {
    return "";
  }

  @Get()
  get() {
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
