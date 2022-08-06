import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ProfileService } from "src/app/services/profile.service";
import { getProfileAction, getProfileFailureAction, getProfileSuccessAction } from "../actions/get-profile.action";


@Injectable({
    providedIn: 'root'
})

export class GetProfileEffect {

    getProfile$ = createEffect(
        () => this.actions$.pipe(
            ofType(getProfileAction),
            switchMap(({ username }) => this.profileService.get(username)
                .pipe(
                    map((profile) => getProfileSuccessAction({ profile })),
                    catchError(() => of(getProfileFailureAction()))
                ))
        )
    )

    constructor (
        private actions$: Actions,
        private profileService: ProfileService
    ) {

    }
}