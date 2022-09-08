import { Test, TestingModule } from '@nestjs/testing';
import { ID } from '../../../utilities/id';
import { AuthController } from '../auth.controller';
import { AuthDal } from '../auth.dal';
import { AuthService } from '../auth.service';
import { authBody, userData } from './auth.mock';

describe('AuthController', () => {
  let controller: AuthController;
  const mockAuthService = {
    registration: jest.fn((body) => {
      return userData;
    }),
    login: jest.fn((body) => {
      return userData;
    }),
    logout: jest.fn(),
  };
  const mockAuthDal = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, AuthDal],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .overrideProvider(AuthDal)
      .useValue(mockAuthDal)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('Auth controller init', () => {
    expect(controller).toBeDefined();
  });

  it('Auth Registration', () => {
    expect(controller.registration(authBody)).toEqual(userData);
  });

  it('Auth Login', () => {
    expect(controller.login(authBody)).toEqual(userData);
  });
});
