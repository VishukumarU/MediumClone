import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PopularTagsService } from "src/app/services/popular-tags.service";
import * as MediumClone from "src/types/medium-clone/medium-clone";

@Injectable({
    providedIn: 'root'
})

export class GetPopularTagsEffect {

    getPopularTags$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.getPopularTagsAction),
            switchMap(() => this.popularTagsService.getPopularTags()
                .pipe(
                    map((tags: string[]) => MediumClone.getPopularTagsSuccessAction({ populartags: tags })),
                    catchError(() => of(MediumClone.getPopularTagsFailureAction()))
                )
            )
        )
    );


    constructor (
        private actions$: Actions,
        private popularTagsService: PopularTagsService
    ) {

    }
}