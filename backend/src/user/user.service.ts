import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async getUser(name: string, password: string): Promise<any> {
    const sql =
      "SELECT * FROM User WHERE name = '" +
      name +
      "' AND password = '" +
      password +
      "'";
    const result = await this.prismaService.$queryRawUnsafe(sql);
    console.log(result);
    return result;
  }
}
