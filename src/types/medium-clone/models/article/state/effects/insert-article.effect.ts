import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import { insertArticleAction, insertArticleFailureAction, insertArticleSuccessAction } from '../actions/insert-article.action'

@Injectable({
    providedIn: 'root'
})

export class InsertArticleEffect {

    insertArticle$ = createEffect(
        () => this.actions$.pipe(
            ofType(insertArticleAction),
            switchMap(({ article }) => this.articleService.insert(article)
                .pipe(
                    map((article: MediumClone.IArticle) => insertArticleSuccessAction({ article })),
                    catchError((errorResponse) => of(insertArticleFailureAction({ errors: errorResponse.error.errors })))
                ))
        )
    );

    navigateAfterInsert$ = createEffect(
        () => this.actions$.pipe(
            ofType(insertArticleSuccessAction),
            tap(({ article }) => this.router.navigate(['article', article.slug]))
        ),
        { dispatch: false }
    );

    constructor (
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router
    ) { }
}