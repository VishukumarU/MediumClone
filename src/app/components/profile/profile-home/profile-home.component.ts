import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    username: string;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    profile$: Observable<App.IProfile | null>;
    currentUser$: Observable<MediumClone.ICurrentUser | null>;
    @Input() mode: string;

    constructor (
        private store: Store<App.IAppState>,
        private route: ActivatedRoute
    ) {
        this.username = this.route.snapshot.params['username'];
        this.isLoading$ = this.store.select(isLoadingSelector);
        this.error$ = this.store.select(errorSelector);
        this.profile$ = this.store.select(profileSelector);
        this.currentUser$ = this.store.select(currentUserSelector);
    }

    ngOnInit (): void {
        this.store.dispatch(getProfileAction({ username: this.username }));
    }

}
