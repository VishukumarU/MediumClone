import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ClearFormService } from "src/app/services/clear-form.service";
import { CommentsService } from "src/app/services/comments.service";
import { addCommentAction, addCommentFailureAction, addCommentSuccessAction } from "../actions/add-comment.action";

@Injectable({
    providedIn: 'root'
})

export class AddCommentEffect {

    addComment$ = createEffect(
        () => this.actions$.pipe(
            ofType(addCommentAction),
            switchMap(({ slug, comment }) => this.commentService.add(slug, comment)
                .pipe(
                    map((comment) => {
                        this.clearFormService.clearForm();
                        return addCommentSuccessAction({ comment });
                    }),
                    catchError((errorResponse) => of(addCommentFailureAction({ errors: errorResponse.error.erros })))
                ))
        )
    );

    constructor (
        private actions$: Actions,
        private commentService: CommentsService,
        private clearFormService: ClearFormService
    ) {

    }

}