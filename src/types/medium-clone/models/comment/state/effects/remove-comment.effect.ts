import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CommentsService } from "src/app/services/comments.service";
import { removeCommentAction, removeCommentFailureAction, removeCommentSuccessAction } from "../actions/remove-comment.action";

@Injectable({
    providedIn: 'root'
})

export class RemoveCommentEffect {

    removeComment$ = createEffect(
        () => this.actions$.pipe(
            ofType(removeCommentAction),
            switchMap(({ slug, id }) => this.commentsService.remove(slug, id)
                .pipe(
                    map((id) => removeCommentSuccessAction({ id })),
                    catchError(() => of(removeCommentFailureAction()))
                ))
        )
    );

    constructor (
        private actions$: Actions,
        private commentsService: CommentsService
    ) { }
}