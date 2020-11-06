import { Test, TestingModule } from '@nestjs/testing';
import { GetDeliveryController } from './get-delivery.controller';

describe('GetDeliveryController', () => {
  let controller: GetDeliveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetDeliveryController],
    }).compile();

    controller = module.get<GetDeliveryController>(GetDeliveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
