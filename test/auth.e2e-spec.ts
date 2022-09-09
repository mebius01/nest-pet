import { UserService } from './../src/components/users/users.service';
import { UserModule } from './../src/components/users/users.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('Auth Controller (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(UserService)
      .useValue({
        list: jest.fn().mockResolvedValue([{ id: 'test' }]),
        update: jest.fn().mockResolvedValue([{ id: 'test' }]),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('(GET) /users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect([{ id: 'test' }]);
  });
});
