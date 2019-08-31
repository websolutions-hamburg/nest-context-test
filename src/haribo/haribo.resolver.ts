import {Query, ResolveProperty, Resolver} from '@nestjs/graphql';
import {HariboModel} from './models/haribo.model';
import {HariboService} from './haribo.service';

@Resolver(of => HariboModel)
export class HariboResolver {

    constructor(private readonly hariboService: HariboService) {}

    @Query(type => [HariboModel])
    async haribos() {
        return this.haribos().findAll();
    }

    @ResolveProperty('bookColor', () => String)
    getBookColor(): Promise<string> {
        return this.hariboService.getBookColor();
    }
}
