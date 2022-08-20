import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ProfileService } from "src/app/services/profile.service";
import { removeFollowAction, removeFollowFailureAction, removeFollowSuccessAction } from "../actions/remove-follow.action";

@Injectable({
    providedIn: 'root'
})
export class RemoveFollowEffect {


    removeFollow$ = createEffect(
        () => this.actions$.pipe(
            ofType(removeFollowAction),
            switchMap(({ username }) => this.profileService.deleteFollow(username)
                .pipe(
                    map((profile) => removeFollowSuccessAction({ profile })),
                    catchError(() => of(removeFollowFailureAction()))
                ))
        )
    );

    constructor (
        private actions$: Actions,
        private profileService: ProfileService
    ) {

    }
}