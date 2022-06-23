import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { PersistenceService } from "src/app/shared/services/persistence/persistence.service";
import * as MediumClone from "src/types/medium-clone/medium-clone";
import { getCurrentUserFailureAction, getCurrentUserSuccessAction } from "src/types/medium-clone/medium-clone";

@Injectable({
    providedIn: 'root'
})

export class GetCurrentUserEffect {

    getCurrentUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.getCurrentUserAction),
            switchMap(() => {
                const token = this.persistenceService.get('accessToken');

                if (!token) {
                    return of(getCurrentUserFailureAction());
                }

                return this.authService.getCurrentUser().pipe(
                    map((currentUser: MediumClone.ICurrentUser) => {
                        return getCurrentUserSuccessAction({ currentUser })
                    }),
                    catchError(() => {
                        return of(getCurrentUserFailureAction());
                    })
                )
            })
        )
    );




    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistenceService: PersistenceService,
    ) {

    }

}