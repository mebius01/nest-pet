import { userId } from './users.mock';
import { userData } from './../../auth/tests/auth.mock';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../users.controller';
import { UserService } from '../users.service';

describe('UserController', () => {
  let controller: UserController;
  const mockUserService = {
    list: jest.fn(() => [userData]),

    get: jest.fn((id) => userData),

    update: jest.fn((id, body) => userData),

    remove: jest.fn((id) => userData),
  };

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

  it('User controller list', () => {
    expect(controller.list()).toEqual([userData]);
  });

  it('User controller get', () => {
    expect(controller.get(userId)).toEqual(userData);
  });

  it('User controller update', () => {
    expect(controller.update(userId, userData)).toEqual(userData);
  });

  it('User controller remove', () => {
    expect(controller.remove(userId)).toEqual(userData);
  });
});
