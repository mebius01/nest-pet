import { Test, TestingModule } from '@nestjs/testing';
import { UserDal } from '../users.dal';
import { UserService } from '../users.service';

describe('UserService', () => {
  let service: UserService;
  const mockUserDal = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserDal],
    })
      .overrideProvider(UserDal)
      .useValue(mockUserDal)
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('User service init', () => {
    expect(service).toBeDefined();
  });
});
