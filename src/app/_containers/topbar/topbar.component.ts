import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from 'src/types/medium-clone/models/auth/state/selectors';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

	isLoggedIn$: Observable<boolean>;
	isAnonymous$: Observable<boolean>;
	currentUser$: Observable<MediumClone.ICurrentUser | null>;

	constructor(
		private store: Store<App.IAppState>
	) {
		this.isLoggedIn$ = this.store.select(isLoggedInSelector);
		this.isAnonymous$ = this.store.select(isAnonymousSelector);
		this.currentUser$ = this.store.select(currentUserSelector);
	}

	ngOnInit (): void {
	}

}
