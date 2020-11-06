import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetDeliveryController } from './get-delivery/get-delivery.controller';

@Module({
  imports: [],
  controllers: [AppController, GetDeliveryController],
  providers: [AppService],
})
export class AppModule {}
