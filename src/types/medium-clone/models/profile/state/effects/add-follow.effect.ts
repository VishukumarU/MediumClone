import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ProfileService } from "src/app/services/profile.service";
import { addFollowAction, addFollowFailureAction, addFollowSuccessAction } from "../actions/add-follow.action";

@Injectable({
    providedIn: 'root'
})

export class AddFollowEffect {

    addFollow$ = createEffect(
        () => this.actions$.pipe(
            ofType(addFollowAction),
            switchMap(({ username }) => this.profileService.addFollow(username)
                .pipe(
                    map((profile) => addFollowSuccessAction({ profile })),
                    catchError(() => of(addFollowFailureAction()))
                ))
        )
    );

    constructor (
        private actions$: Actions,
        private profileService: ProfileService
    ) {

    }
}