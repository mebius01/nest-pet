import { userData } from './../../auth/tests/auth.mock';
import { Test, TestingModule } from '@nestjs/testing';
import { UserDal } from '../users.dal';
import { UserService } from '../users.service';
import { userId } from './users.mock';

describe('UserService', () => {
  let service: UserService;
  const mockUserDal = {
    list: jest.fn(() => [userData]),

    get: jest.fn((id) => userData),

    update: jest.fn((id, body) => userData),

    remove: jest.fn((id) => userData),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserDal],
    })
      .overrideProvider(UserDal)
      .useValue(mockUserDal)
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('User service list', () => {
    expect(service.list()).toEqual([userData]);
  });

  it('User service get', () => {
    expect(service.get(userId)).toEqual(userData);
  });

  it('User service update', async () => {
    expect(await service.update(userId, userData)).toEqual(userData);
  });

  it('User service remove', async () => {
    expect(await service.remove(userId)).toEqual(userData);
  });
});
