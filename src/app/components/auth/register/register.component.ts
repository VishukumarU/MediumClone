import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from 'src/types/medium-clone/models/auth/state/selectors';

import { registerAction } from '../../../../types/medium-clone/models/auth/state/actions/actions';
import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form: FormGroup;
    isSubmitting$: Observable<boolean>;

    constructor(
        private fb: FormBuilder,
        private service: AuthService,
        private store: Store) {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    }

    ngOnInit (): void {
        this.initializeForm();
    }

    initializeForm () {
        console.log('init');

        this.form = this.fb.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

    onSave () {
        this.store.dispatch(registerAction(this.form.value))
    }

}
