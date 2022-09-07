import { Test, TestingModule } from '@nestjs/testing';
import { ID } from '../../../utilities/id';
import { AuthController } from '../auth.controller';
import { AuthDal } from '../auth.dal';
import { AuthService } from '../auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  const mockAuthService = {
    registration: jest.fn((body) => {
      return {
        id: ID('US'),
        email: body.email,
        name: body.email.split('@')[0],
      };
    }),
    login: jest.fn((body) => {
      return {
        id: ID('US'),
        email: body.email,
        name: body.email.split('@')[0],
        role: 'user',
      };
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

  const registrationBody = {
    email: 'user@gmail.com',
    password: '123456',
  };

  it('Controller Init', () => {
    expect(controller).toBeDefined();
  });

  it('Auth Registration', () => {
    expect(controller.registration(registrationBody)).toEqual({
      id: expect.any(String),
      email: 'user@gmail.com',
      name: 'user',
    });
  });

  it('Auth Login', () => {
    expect(controller.login(registrationBody)).toEqual({
      id: expect.any(String),
      email: 'user@gmail.com',
      name: 'user',
      role: 'user',
    });
  });
});
