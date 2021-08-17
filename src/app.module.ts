import { Module } from '@nestjs/common';

import { CityController } from "./controllers/city.controller";
import { ClientController } from "./controllers/client.controller";

import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CityController, ClientController],
  providers: [AppService],
})
export class AppModule {}
