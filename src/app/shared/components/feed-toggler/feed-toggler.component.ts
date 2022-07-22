import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/types/medium-clone/models/auth/state/selectors';

@Component({
    selector: 'app-feed-toggler',
    templateUrl: './feed-toggler.component.html',
    styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;
    @Input() tagName: string;

    constructor (
        private store: Store<App.IAppState>
    ) {
        this.isLoggedIn$ = this.store.select(isLoggedInSelector);
    }

    ngOnInit (): void {
    }

}
