import {forwardRef, Inject, Injectable, Scope} from '@nestjs/common';
import {CONTEXT} from '@nestjs/graphql';
import {Request} from 'express';
import {RecipesService} from '../recipes/recipes.service';
import {BookService} from '../book/book.service';

@Injectable({scope: Scope.REQUEST})
export class RequestService {
    private readonly request: Request;

    constructor(
//        @Inject(CONTEXT)
        @Inject(forwardRef(() => CONTEXT))
        private readonly context: {request: Request},
    ) {
        if (context.request) {
            this.request = context.request;
        }
    }

    public isAvailable(): boolean {
        return typeof this.request === 'object';
    }
}
