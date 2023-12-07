import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(
    @Query('name') name: string = 'test',
    @Query('password') password: string = 'test',
  ): Promise<any> {
    console.log(name, password);
    return this.userService.getUser(name, password);
  }
}
