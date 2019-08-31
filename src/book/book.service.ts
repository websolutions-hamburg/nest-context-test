import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/models/recipe';
import {RequestService} from '../request/request.service';
import {Book} from './models/book';
import {AuthorService} from '../author/author.service';
import {Author} from '../author/models/author';
import {HariboService} from '../haribo/haribo.service';
import {HariboModel} from '../haribo/models/haribo.model';

@Injectable()
export class BookService {

  constructor(
      @Inject(forwardRef(() => RequestService))
      private readonly requestService: RequestService,

      @Inject(forwardRef(() => RecipesService))
      private readonly recipesService: RecipesService,

      private readonly authorService: AuthorService,

      private readonly hariboService: HariboService,
  ) {}

  async findOneById(id: string): Promise<Book> {
    return {id: '1', color: 'black'} as Book;
  }

  async findAll(): Promise<Book[]> {
    console.log('Request available in book service:', this.requestService.isAvailable());
    return [{id: '1'}] as Book[];
  }

  async getRecipes(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }

  async getAuthor(): Promise<Author> {
    return this.authorService.findOneById('1');
  }

  async getHaribo(): Promise<HariboModel[]> {
    return this.hariboService.findAll();
  }
}
