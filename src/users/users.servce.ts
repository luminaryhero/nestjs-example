import { EventEmitter2 } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { UserCreatedEvent } from './user-created.event';

@Injectable()
export class UsersService {
  constructor(private eventEmitter: EventEmitter2) {}

  async create(userId: number, userName: string) {
    console.log('Some business logic', { userId, userName });
    // Some business logic
    this.eventEmitter.emit(
      'user.created',
      new UserCreatedEvent(userId, userName),
    );
  }
}
