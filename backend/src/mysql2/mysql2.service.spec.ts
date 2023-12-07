import { Test, TestingModule } from '@nestjs/testing';
import { Mysql2Service } from './mysql2.service';

describe('Mysql2Service', () => {
  let service: Mysql2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Mysql2Service],
    }).compile();

    service = module.get<Mysql2Service>(Mysql2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
