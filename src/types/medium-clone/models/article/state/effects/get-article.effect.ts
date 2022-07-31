import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import * as MediumClone from "src/types/medium-clone/medium-clone";

@Injectable({
    providedIn: 'root'
})

export class GetArticleEffect {

    getArticle$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.getArticleAction),
            switchMap(({ slug }) => this.articleService.getArticle(slug)
                .pipe(
                    map((article) => MediumClone.getArticleSuccessAction({ article })),
                    catchError(() => of(MediumClone.getArticleFailureAction()))
                ))
        )
    );

    getArticleEdit$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.getArticleEditAction),
            switchMap(({ slug }) => this.articleService.getArticle(slug)
                .pipe(
                    map((article) => MediumClone.getArticleEditSuccessAction({ article })),
                    catchError(() => of(MediumClone.getArticleFailureAction()))
                ))
        )
    );

    redirectToEditPage$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.getArticleEditSuccessAction),
            tap(({ article }) => this.router.navigate(['/article', article.slug, 'edit']))
        ),
        { dispatch: false }
    );

    constructor (
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router
    ) { }
}