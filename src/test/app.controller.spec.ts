import { Test, TestingModule } from '@nestjs/testing';
import { PingController } from '../app.controller';

describe('PingController', () => {
  let pingController: PingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PingController],
    }).compile();

    pingController = app.get<PingController>(PingController);
  });

  describe('root', () => {
    it('should return Version', () => {
      expect(pingController.get()).toEqual({ version: '0.0.1' });
    });
  });
});
