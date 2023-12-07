import { Injectable } from '@nestjs/common';
import * as mysql2 from 'mysql2/promise';

@Injectable()
export class Mysql2Service {
  public async connectDb() {
    const connection = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'demo',
    });
    return connection;
  }
}
