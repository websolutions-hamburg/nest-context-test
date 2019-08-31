import {TestModel} from './models/test.model';
import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {RequestService} from '../request/request.service';

@Injectable()
export class TestService {

    constructor(
        @Inject(forwardRef(() => RequestService))
        private readonly requestService: RequestService,
    ) {}

    public async findAll(): Promise<TestModel[]> {
        console.log('Request available in test service:', this.requestService.isAvailable());
        return [{id: '1', name: 'TestName'}];
    }
}
