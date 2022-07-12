import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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


    constructor(
        private store: Store<App.IAppState>,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.feed$ = this.store.select(feedSelector);
        this.error$ = this.store.select(errorSelector);
        this.baseUrl = this.router.url.split('?')[0];
        this.subs.add(
            this.route.queryParams.subscribe((params: Params) => {
                this.currentPage = +(params['page']) || 1;
            })
        );
    }

    ngOnInit (): void {
        this.fetchData();
    }

    fetchData (): void {
        this.store.dispatch(getFeedAction({ url: this.apiUrl }));
    }


    ngOnDestroy (): void {
        this.subs.unsubscribe();
    }


}
