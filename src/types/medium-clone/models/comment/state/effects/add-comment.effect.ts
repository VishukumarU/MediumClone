import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CommentsService } from "src/app/services/comments.service";
import { addCommentAction, addCommentFailureAction, addCommentSuccessAction } from "../actions/add-comment.action";

@Injectable({
    providedIn: 'root'
})

export class AddCommentEffect {

    addComment$ = createEffect(
        () => this.actions$.pipe(
            ofType(addCommentAction),
            switchMap(({ username, comment }) => this.commentService.add(username, comment)
                .pipe(
                    map((comment) => addCommentSuccessAction({ comment })),
                    catchError((errorResponse) => of(addCommentFailureAction({ errors: errorResponse.error.erros })))
                ))
        )
    );

    constructor (
        private actions$: Actions,
        private commentService: CommentsService
    ) {

    }

}