import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { Mysql2Service } from './mysql2/mysql2.service';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, Mysql2Service, PrismaService],
})
export class AppModule {}
