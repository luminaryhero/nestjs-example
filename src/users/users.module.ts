import { Module } from '@nestjs/common';
import { UsersService } from './users.servce';
import { UsersController } from './users.controller';
import { UserCreatedListener } from './user-created.listener';

@Module({
  imports: [],
  providers: [UsersService, UserCreatedListener],
  controllers: [UsersController],
})
export class UsersModule {}
