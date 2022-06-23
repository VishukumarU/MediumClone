import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { PersistenceService } from "src/app/shared/services/persistence/persistence.service";
import * as MediumClone from "src/types/medium-clone/medium-clone";
import { registerFailureAction, registerSuccessAction } from "../actions/register.action";

@Injectable({
    providedIn: 'root'
})
export class RegisterEffect {

    register$ = createEffect(() => this.actions$.pipe(
        ofType(MediumClone.registerAction),
        switchMap(({ request }) => this.authService.register(request)
            .pipe(
                map(currentUser => {
                    this.persistenceService.set('accessToken', currentUser.token);
                    return registerSuccessAction({ currentUser });
                }),
                catchError((errorResponse: HttpErrorResponse) => of(registerFailureAction({ errors: errorResponse.error.errors })))
            ))
    ));

    redirectAfterSubmit$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.registerSuccessAction),
            tap(() => {
                this.router.navigateByUrl('/home');
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