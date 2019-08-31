import { NotFoundException } from '@nestjs/common';
import {Args, Query, ResolveProperty, Resolver} from '@nestjs/graphql';
import {Recipe} from '../recipes/models/recipe';
import {Book} from './models/book';
import {BookService} from './book.service';
import {Author} from '../author/models/author';

@Resolver(of => Book)
export class BookResolver {

  constructor(
      private readonly bookService: BookService,
  ) {}

  @Query(returns => Book)
  async book(@Args('id') id: string): Promise<Book> {
    const book = await this.bookService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Query(returns => [Book])
  books(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @ResolveProperty('recipes', () => [Recipe])
  getRecipes(): Promise<Recipe[]> {
    return this.bookService.getRecipes();
  }

  @ResolveProperty('author', () => Author)
  getAuthor(): Promise<Author> {
    return this.bookService.getAuthor();
  }
}
