import { Module } from '@nestjs/common';

import { CityController } from "./controllers/city.controller";
import { ClientController } from "./controllers/client.controller";

import { CityService } from './services/city.service';

@Module({
  imports: [],
  controllers: [CityController, ClientController],
  providers: [CityService],
})
export class AppModule {}
