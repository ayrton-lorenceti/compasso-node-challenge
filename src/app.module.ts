import { Module } from '@nestjs/common';

import { CityController } from "./controllers/city.controller";
import { ClientController } from "./controllers/client.controller";

import { CityService } from './services/city.service';
import { ClientService } from "./services/client.service";

@Module({
  imports: [],
  controllers: [
    CityController, 
    ClientController
  ],
  providers: [
    CityService,
    ClientService
  ],
})
export class AppModule {}
