import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FeedService } from "src/app/services/feed.service";
import * as MediumClone from "src/types/medium-clone/medium-clone";

@Injectable({
    providedIn: 'root'
})

export class GetFeedEffect {

    getFeed$ = createEffect(
        () => this.actions$.pipe(
            ofType(MediumClone.getFeedAction),
            switchMap(({ url }) => this.feedService.get(url)
                .pipe(
                    map((feed: MediumClone.IFeedResponse) => MediumClone.getFeedSuccessAction({ feed })),
                    catchError(() => of(MediumClone.getFeedFailureAction()))
                ))
        )
    )

    constructor(
        private actions$: Actions,
        private feedService: FeedService
    ) {

    }
}