import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FavouriteService } from "src/app/services/favourite.service";
import { increaseCountAction, increaseCountFailueAction, increaseCountSuccessAction } from "../actions/increase-count.action";

@Injectable({
    providedIn: 'root'
})

export class IncreaseCountEffect {

    increaseCount$ = createEffect(
        () => this.actions$.pipe(
            ofType(increaseCountAction),
            switchMap(({ slug }) => this.favouriteService.add(slug)
                .pipe(
                    map((article) => increaseCountSuccessAction({ article })),
                    catchError((errorResponse) => of(increaseCountFailueAction({ error: errorResponse.error.errors })))
                ))
        )
    );

    constructor (
        private actions$: Actions,
        private favouriteService: FavouriteService
    ) { }
}