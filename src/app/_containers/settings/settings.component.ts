import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { updateCurrentUserAction } from 'src/types/medium-clone/medium-clone';
import { currentUserSelector } from 'src/types/medium-clone/models/auth/state/selectors';
import { logoutAction } from 'src/types/medium-clone/models/settings/state/actions/logout-action';
import { isSubmittingSelector, validationErrorsSelector } from 'src/types/medium-clone/models/settings/state/selectors';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

    subs: Subscription;
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<MediumClone.IBackEndErrors | null>;
    currentUser$: Observable<MediumClone.ICurrentUser | null>;
    currentUser: MediumClone.ICurrentUser | null;

    constructor (
        private fb: FormBuilder,
        private store: Store<App.IAppState>
    ) { }

    ngOnInit (): void {
        this.subs = new Subscription();
        this.isSubmitting$ = this.store.select(isSubmittingSelector);
        this.backendErrors$ = this.store.select(validationErrorsSelector);
        this.currentUser$ = this.store.select(currentUserSelector);

        this.form = this.fb.group({
            email: [''],
            password: [''],
            bio: [''],
            username: [''],
            image: ['']
        });

        this.subs.add(
            this.currentUser$.pipe(
                filter((currentUser) => !!currentUser),
                tap((currentUser) => {
                    this.currentUser = currentUser;
                    this.form.setValue({
                        email: currentUser?.email,
                        password: '',
                        bio: currentUser?.bio,
                        username: currentUser?.username,
                        image: currentUser?.image
                    })
                })
            ).subscribe()
        );

    }

    onSave (): void {

        const updatedUser: MediumClone.ICurrentUserInput = {
            ...this.currentUser,
            ...this.form.value
        }
        this.store.dispatch(updateCurrentUserAction({ user: updatedUser }))

    }

    logout (): void {
        this.store.dispatch(logoutAction());
    }

    ngOnDestroy (): void {
        this.subs.unsubscribe();
    }

}
