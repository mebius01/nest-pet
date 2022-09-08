import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../users.controller';
import { UserService } from '../users.service';

describe('UserController', () => {
  let controller: UserController;
  const mockUserService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('User controller init', () => {
    expect(controller).toBeDefined();
  });
});
