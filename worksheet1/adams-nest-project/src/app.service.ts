import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Changing the return string from Hello World to this description of a string on TypeScript!';
  }
}
