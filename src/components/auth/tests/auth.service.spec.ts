import { Test, TestingModule } from '@nestjs/testing';
import { AuthDal } from '../auth.dal';
import { AuthService } from '../auth.service';
import {
  userData,
  authData,
  authBody,
  loginDalData,
  loginData,
} from './auth.mock';

describe('Auth Service', () => {
  let service: AuthService;

  const mockAuthDal = {
    rols: jest.fn(() => {
      return { id: 2, role: 'user' };
    }),

    registration: jest.fn((body) => {
      return { userData, authData };
    }),

    login: jest.fn((email) => loginDalData),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, AuthDal],
    })
      .overrideProvider(AuthDal)
      .useValue(mockAuthDal)
      .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('Auth service init', () => {
    expect(service).toBeDefined();
  });

  it('Service Registration', async () => {
    expect(await service.registration(authBody)).toEqual({
      authData,
      userData,
    });
  });

  it('Service Login', async () => {
    expect(await service.login(authBody)).toEqual(loginData);
  });
});
