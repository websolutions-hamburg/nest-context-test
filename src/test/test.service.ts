import {TestModel} from './models/test.model';
import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {RequestService} from '../request/request.service';
import {AuthorService} from '../author/author.service';

@Injectable()
export class TestService {

    constructor(
        private readonly requestService: RequestService,

        @Inject(forwardRef(() => AuthorService))
        private readonly authorService: AuthorService,
    ) {}

    public async findAll(): Promise<TestModel[]> {
        console.log('Request available in test service:', this.requestService.isAvailable());
        return [{id: '1', name: 'TestName'}] as TestModel[];
    }

    async getAuthorName(): Promise<string> {
        const test = await this.authorService.findAll();
        return test[0].name;
    }
}
