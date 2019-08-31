import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {Author} from './models/author';
import {RequestService} from '../request/request.service';
import {BookService} from '../book/book.service';
import {RecipesService} from '../recipes/recipes.service';

@Injectable()
export class AuthorService {

  constructor(
      @Inject(forwardRef(() => RequestService))
      private readonly requestService: RequestService,

//      @Inject(forwardRef(() => BookService))
//      private readonly bookService: BookService,

//      @Inject(forwardRef(() => RecipesService))
//      private readonly recipesService: RecipesService,
  ) {}

  async findOneById(id: string): Promise<Author> {
    console.log('Request available in author service:', this.requestService.isAvailable());
    return {id: '1', name: 'The Author'} ;
  }

  async findAll(): Promise<Author[]> {
    return [{id: '1', name: 'The Author'}] as Author[];
  }
}
