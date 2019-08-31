import {TestService} from './test.service';
import {TestModel} from './models/test.model';
import {Query, ResolveProperty, Resolver} from '@nestjs/graphql';

@Resolver(of => TestModel)
export class TestResolver {

    constructor(private readonly testService: TestService) {}

    @Query(type => [TestModel])
    async tests() {
        return this.testService.findAll();
    }

    @ResolveProperty('authorName', () => String)
    getAuthorName(): Promise<string> {
        return this.testService.getAuthorName();
    }
}
