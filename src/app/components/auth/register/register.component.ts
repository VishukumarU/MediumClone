import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/types/medium-clone/models/auth';
import {
    isSubmittingSelector,
    validationErrorsSelector
} from 'src/types/medium-clone/models/auth/state/selectors';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<MediumClone.IBackEndErrors | null>;

    constructor(
        private fb: FormBuilder,
        private store: Store<App.IAppState>) {
        this.isSubmitting$ = this.store.pipe(select((isSubmittingSelector)));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }

    ngOnInit (): void {
        this.initializeForm();
    }

    initializeForm () {
        this.form = this.fb.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

    onSave () {
        // const { email, password, username } = this.form.value;
        const request: MediumClone.IRegisterUser = {
            user: this.form.value
        };
        this.store.dispatch(registerAction({ request }))
    }

}
