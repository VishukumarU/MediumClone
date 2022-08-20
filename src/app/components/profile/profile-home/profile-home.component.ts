import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfileAction } from 'src/types/medium-clone/medium-clone';
import { currentUserSelector } from 'src/types/medium-clone/models/auth/state/selectors';
import { errorSelector, isLoadingSelector, profileSelector } from 'src/types/medium-clone/models/profile/state/selectors';

@Component({
    selector: 'app-profile-home',
    templateUrl: './profile-home.component.html',
    styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

    private _mode: string;
    username: string;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    profile$: Observable<App.IProfile | null>;
    currentUser$: Observable<MediumClone.ICurrentUser | null>;
    apiUrl = '';
    @Input() set mode (value: string) {
        this._mode = value;
        if (value === 'author') {
            this.apiUrl = `/articles?author=${this.username}`;
        } else {
            this.apiUrl = `/articles?favorited=${this.username}`;
        }
    }

    get mode () {
        return this._mode;
    }

    constructor (
        private store: Store<App.IAppState>,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.username = this.route.snapshot.params['username'];
        this.isLoading$ = this.store.select(isLoadingSelector);
        this.error$ = this.store.select(errorSelector);
        this.profile$ = this.store.select(profileSelector);
        this.currentUser$ = this.store.select(currentUserSelector);

        // Force component re-load if route changes
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    }

    ngOnInit (): void {
        this.store.dispatch(getProfileAction({ username: this.username }));
    }

}
