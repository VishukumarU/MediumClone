import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { PersistenceService } from "src/app/shared/services/persistence/persistence.service";
import * as MediumClone from "src/types/medium-clone/medium-clone";
import { loginFailureAction, loginSuccessAction } from "../actions/login.action";

@Injectable({
    providedIn: 'root'
})

export class LoginEffect {

    login$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.loginAction),
            switchMap(({ request }) => this.authService.login(request)
                .pipe(
                    map(currentUser => {
                        this.persistenceService.set('accessToken', currentUser.token);
                        return loginSuccessAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) =>
                        of(loginFailureAction({ errors: errorResponse.error.errors })))
                ))
        )
    );

    redirectAfterLogin$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.loginSuccessAction),
            tap(() => {
                this.router.navigateByUrl('/home')
            })
        ),
        { dispatch: false }
    );



    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistenceService: PersistenceService,
        private router: Router
    ) {

    }

}