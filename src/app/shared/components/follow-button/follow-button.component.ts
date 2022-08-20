import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addFollowAction } from 'src/types/medium-clone/models/profile/state/actions/add-follow.action';
import { removeFollowAction } from 'src/types/medium-clone/models/profile/state/actions/remove-follow.action';
import { profileSelector } from 'src/types/medium-clone/models/profile/state/selectors';

@Component({
    selector: 'app-follow-button',
    templateUrl: './follow-button.component.html',
    styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit {

    profile$: Observable<App.IProfile | null>;

    constructor (
        private store: Store<App.IAppState>
    ) {
        this.profile$ = this.store.select(profileSelector);
    }

    ngOnInit (): void {
    }

    updateFollowing (isFollowing: boolean, username: string): void {
        isFollowing ?
            this.store.dispatch(removeFollowAction({ username })) :
            this.store.dispatch(addFollowAction({ username }));
    }

}
