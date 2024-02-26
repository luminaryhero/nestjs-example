import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { RedisController } from './redis.controller';
import { RedisService } from './redis.serve';

@Module({
  imports: [],
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          url: 'redis://default:123456@localhost:6379',
        });
        await client.connect();
        return client;
      },
    },
  ],
  controllers: [RedisController],
})
export class RedisCacheModule {}
