import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { PersistenceService } from "src/app/shared/services/persistence/persistence.service";
import { logoutAction } from "../actions/logout-action";

@Injectable({
    providedIn: 'root'
})

export class LogoutEffect {


    logout$ = createEffect(
        () => this.actions$.pipe(
            ofType(logoutAction),
            tap(() => {
                this.persistenceService.remove('accessToken');
                this.router.navigate(['/home']);
            })
        ),
        { dispatch: false }
    )

    constructor (
        private persistenceService: PersistenceService,
        private router: Router,
        private actions$: Actions
    ) { }
}