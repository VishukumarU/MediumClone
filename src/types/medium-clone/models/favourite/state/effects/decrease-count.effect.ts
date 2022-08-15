import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FavouriteService } from "src/app/services/favourite.service";
import { decreaseCountAction, decreaseCountFailureAction, decreaseCountSuccessAction } from "../actions/decrease-count.action";

@Injectable({
    providedIn: 'root'
})

export class DecreaseCountEffect {

    decreaseCount$ = createEffect(
        () => this.actions$.pipe(
            ofType(decreaseCountAction),
            switchMap(({ slug }) => this.favouriteService.remove(slug)
                .pipe(
                    map((article) => decreaseCountSuccessAction({ article })),
                    catchError((errorResponse) => of(decreaseCountFailureAction({ error: errorResponse.error.errors })))
                ))
        )
    );

    constructor (
        private actions$: Actions,
        private favouriteService: FavouriteService
    ) {

    }
}