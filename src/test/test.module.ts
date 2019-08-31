import {Module} from '@nestjs/common';
import {TestService} from './test.service';
import {TestResolver} from './test.resolver';
import {RequestService} from '../request/request.service';

@Module({
    providers: [TestService, TestResolver, RequestService],
    exports: [TestService],
})
export class TestModule {}
