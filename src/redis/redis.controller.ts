import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RedisService } from './redis.serve';

@Controller('redis')
export class RedisController {
  constructor(private redisService: RedisService) {}

  @Get(':key')
  getKey(@Param('key') key: string) {
    return this.redisService.get(key);
  }

  @Post()
  add(@Body('key') key: string, @Body('value') value: string) {
    this.redisService.set('name', value);
  }

  @Patch(':key')
  update(@Param('key') key: string, @Body('value') newValue: string) {
    const existKey = this.redisService.get(key);
    if (!existKey) return;

    this.redisService.set(key, newValue);
  }

  @Delete(':key')
  del(@Param('key') key) {
    this.redisService.del(key);
  }
}
