import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import { deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction } from "../actions/delete-article.action";

@Injectable({
    providedIn: 'root'
})

export class DeleteArticleEffect {

    deleteArticle$ = createEffect(
        () => this.actions$.pipe(
            ofType(deleteArticleAction),
            switchMap(({ slug }) => this.articleService.delete(slug)
                .pipe(
                    map(() => deleteArticleSuccessAction()),
                    catchError(() => of(deleteArticleFailureAction()))
                ))
        )
    );

    redirectAfterDelete$ = createEffect(
        () => this.actions$.pipe(
            ofType(deleteArticleSuccessAction),
            tap(() => this.router.navigate(['/home']))
        ),
        { dispatch: false }
    )

    constructor (
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router
    ) {

    }
}