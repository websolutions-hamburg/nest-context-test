import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {RequestService} from '../request/request.service';
import {HariboModel} from './models/haribo.model';
import {BookService} from '../book/book.service';

@Injectable()
export class HariboService {

    constructor(
        private readonly requestService: RequestService,

//        @Inject(forwardRef(() => BookService))
//        private readonly bookService: BookService,
    ) {}

    public async findAll(): Promise<HariboModel[]> {
        console.log('Request available in haribo service:', this.requestService.isAvailable());
        return [{id: '1', name: 'Haribo'}] as HariboModel[];
    }

//    async getBookColor(): Promise<string> {
//        const book = await this.bookService.findOneById('1');
//        return book.color;
//    }
}
