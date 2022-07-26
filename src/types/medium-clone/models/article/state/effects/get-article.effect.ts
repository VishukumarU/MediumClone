import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
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
    )

    constructor (
        private actions$: Actions,
        private articleService: ArticleService
    ) { }
}