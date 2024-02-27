import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.servce';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  findAll(@Body('id') userId: number, @Body('name') userName: string) {
    return this.usersService.create(userId, userName);
  }
}
