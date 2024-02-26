import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  setHi(name: string): string {
    return `Hi ${name}`;
  }
}
