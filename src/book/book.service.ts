import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/models/recipe';
import {RequestService} from '../request/request.service';
import {Book} from './models/book';
import {AuthorService} from '../author/author.service';
import {Author} from '../author/models/author';

@Injectable()
export class BookService {

  constructor(
      @Inject(forwardRef(() => RequestService))
      private readonly requestService: RequestService,

      @Inject(forwardRef(() => RecipesService))
      private readonly recipesService: RecipesService,

//      @Inject(forwardRef(() => AuthorService))
      private readonly authorService: AuthorService,
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
}
