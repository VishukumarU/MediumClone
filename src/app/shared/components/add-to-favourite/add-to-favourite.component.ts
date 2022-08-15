import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decreaseCountAction } from 'src/types/medium-clone/models/favourite/state/actions/decrease-count.action';
import { increaseCountAction } from 'src/types/medium-clone/models/favourite/state/actions/increase-count.action';
import { isLoadingSelector } from 'src/types/medium-clone/models/favourite/state/selectors';

@Component({
    selector: 'app-add-to-favourite',
    templateUrl: './add-to-favourite.component.html',
    styleUrls: ['./add-to-favourite.component.scss']
})
export class AddToFavouriteComponent implements OnInit {

    isLoading$: Observable<boolean>;
    @Input() isFavourited: boolean;
    @Input() slug: string;
    @Input() favouritesCount: number;

    constructor (
        private store: Store<App.IAppState>
    ) {
        this.isLoading$ = this.store.select(isLoadingSelector);
    }

    ngOnInit (): void {
    }

    updateCount (): void {
        !this.isFavourited ? this.store.dispatch(increaseCountAction({ slug: this.slug })) :
            this.store.dispatch(decreaseCountAction({ slug: this.slug }));
    }

}
