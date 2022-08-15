import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { SettingsService } from "src/app/services/settings.service";
import * as MediumClone from "src/types/medium-clone/medium-clone";

@Injectable({
    providedIn: 'root'
})

export class UpdateCurrentUserEffect {


    updateCurrentUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.updateCurrentUserAction),
            switchMap(({ user }) => this.settingsService.updateCurrentUser(user)
                .pipe(
                    map((user) => MediumClone.updateCurrentUserSuccessAction({ user })),
                    catchError((errorResponse) => of(MediumClone.updateCurrentUserFailureAction({ errors: errorResponse.error.errors })))
                )
            ))

    );

    redirectAfterUpdate$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.updateCurrentUserSuccessAction),
            tap(({ user }) => this.router.navigate(['/profile', user.username]))
        ),
        { dispatch: false }
    );

    constructor (
        private actions$: Actions,
        private router: Router,
        private settingsService: SettingsService
    ) {

    }
}