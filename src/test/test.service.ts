import {TestModel} from './models/test.model';
import {Injectable} from '@nestjs/common';
import {RequestService} from '../request/request.service';

@Injectable()
export class TestService {

    constructor(private readonly requestService: RequestService) {}

    public async findAll(): Promise<TestModel[]> {
        console.log(this.requestService.isAvailable());
        return [{id: '1', name: 'TestName'}];
    }
}
