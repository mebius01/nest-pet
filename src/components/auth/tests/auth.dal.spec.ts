import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../../db/db.module';
import {
  authRepository,
  usersRepository,
  usersRolsRepository,
} from '../../../db/repository';
import { AuthDal } from '../auth.dal';

describe('AuthDal', () => {
  let dal: AuthDal;
  // const mockUserDal = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        AuthDal,
        ...authRepository,
        ...usersRepository,
        ...usersRolsRepository,
      ],
    }).compile();

    dal = module.get<AuthDal>(AuthDal);
  });

  it('Auth dal init', () => {
    expect(dal).toBeDefined();
  });
});
