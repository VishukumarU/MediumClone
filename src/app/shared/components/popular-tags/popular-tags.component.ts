import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPopularTagsAction } from 'src/types/medium-clone/medium-clone';
import { errorSelector, isLoadingSelector, popularTagsSelector } from 'src/types/medium-clone/models/popular-tags/state/selectors';

@Component({
    selector: 'app-popular-tags',
    templateUrl: './popular-tags.component.html',
    styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    popularTags$: Observable<string[] | null>;

    constructor(
        private store: Store<App.IAppState>
    ) {
        this.isLoading$ = this.store.select(isLoadingSelector);
        this.error$ = this.store.select(errorSelector);
        this.popularTags$ = this.store.select(popularTagsSelector);
    }

    ngOnInit (): void {
        this.store.dispatch(getPopularTagsAction());
    }

}
