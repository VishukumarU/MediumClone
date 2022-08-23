import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CommentsService } from "src/app/services/comments.service";
import { getCommentAction, getCommentFailureAction, getCommentSuccessAction } from "../actions/get-comment.action";

@Injectable({
    providedIn: 'root'
})

export class GetCommentEffect {

    getComment$ = createEffect(
        () => this.actions$.pipe(
            ofType(getCommentAction),
            switchMap(({ username }) => this.commentService.query(username)
                .pipe(
                    map((comments) => getCommentSuccessAction({ comments })),
                    catchError(() => of(getCommentFailureAction()))
                ))
        )
    )

    constructor (
        private actions$: Actions,
        private commentService: CommentsService
    ) { }

}