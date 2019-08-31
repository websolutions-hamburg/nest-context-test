import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {Author} from './models/author';
import {RequestService} from '../request/request.service';
import {TestService} from '../test/test.service';

@Injectable()
export class AuthorService {

  constructor(
      private readonly requestService: RequestService,

      @Inject(forwardRef(() => TestService))
      private readonly testService: TestService,
  ) {}

  async findOneById(id: string): Promise<Author> {
    console.log('Request available in author service:', this.requestService.isAvailable());
    return {id: '1', name: 'The Author'} as Author ;
  }

  async findAll(): Promise<Author[]> {
    console.log('Request available in author service:', this.requestService.isAvailable());
    return [{id: '1', name: 'The Author'}] as Author[];
  }

  async getTestName(): Promise<string> {
    const test = await this.testService.findAll();
    return test[0].name;
  }
}
