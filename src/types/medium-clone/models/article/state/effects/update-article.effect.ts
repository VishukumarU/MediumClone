import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import * as MediumClone from "src/types/medium-clone/medium-clone";

@Injectable({
    providedIn: 'root'
})
export class UpdateArticleEffect {

    updateArticle$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.updateArticleAction),
            switchMap(({ article }) => this.articleService.update(article)
                .pipe(
                    map((article) => MediumClone.updateArticleSuccessAction({ article })),
                    catchError((errorResponse) => of(MediumClone.updateArticleFailureAction({ errors: errorResponse.error.errors })))
                ))

        )
    );

    redirectAfterUpdate$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.updateArticleSuccessAction),
            tap(({ article }) => this.router.navigate(['/article', article.slug]))
        ),
        { dispatch: false }
    )

    constructor (
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router
    ) { }
}