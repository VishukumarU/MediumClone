import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { stringify, parseUrl } from 'query-string';

import { environment } from 'src/environments/environment';
import { getFeedAction } from 'src/types/medium-clone/core';
import {
    feedSelector,
    isLoadingSelector,
    errorSelector
} from 'src/types/medium-clone/models/feed/state/selectors';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

    feed$: Observable<MediumClone.IFeedResponse | null>;
    error$: Observable<string | null>;
    isLoading$: Observable<boolean>;
    limit = environment.limit;
    currentPage: number;
    baseUrl = '';
    subs: Subscription = new Subscription();
    @Input() apiUrl = '';


    constructor (
        private store: Store<App.IAppState>,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.feed$ = this.store.pipe(select(feedSelector));
        this.error$ = this.store.select(errorSelector);
        this.baseUrl = this.router.url.split('?')[0];

    }

    ngOnInit (): void {
        // this.fetchFeed();
        this.subs.add(
            this.route.queryParams.subscribe((params: Params) => {
                this.currentPage = +(params['page']) || 1;
                this.fetchFeed();
            })
        );
    }

    fetchFeed (): void {

        //limit: 2
        //offset
        // page 1 -- offset 0
        // page 2 -- offset 2
        // page 3 -- offset 4

        const offset = (this.currentPage * (this.limit + 2)) - (this.limit);
        const parsedUrl = parseUrl(this.apiUrl);
        const stringifiedParams = stringify({
            offset,
            ...parsedUrl.query,
            // limit: this.limit
            limit: 0
        })
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
        this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
    }


    ngOnDestroy (): void {
        this.subs.unsubscribe();
    }


}
