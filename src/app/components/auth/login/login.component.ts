import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from 'src/types/medium-clone/medium-clone';
import {
	isSubmittingSelector,
	validationErrorsSelector
} from 'src/types/medium-clone/models/auth/state/selectors';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		})
	}

	onLogin () {
		const request: MediumClone.ILoginRequest = {
			user: this.form.value
		};

		this.store.dispatch(loginAction({ request }));
	}

}
