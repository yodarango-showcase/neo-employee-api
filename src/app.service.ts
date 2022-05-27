import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStarted(): string {
    return 'Please refer to the documentation contained in the README.MD File';
  }
}
