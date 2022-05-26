import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '../_routes/auth-routing.module';
import { RegisterComponent } from '../components/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducers } from '../../types/medium-clone/models/auth/state/auth.reducers';
import { AuthComponent } from '../_containers/auth/auth.component';


@NgModule({
    declarations: [
        RegisterComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        StoreModule.forFeature('auth', authReducers)
    ]
})
export class AuthModule { }
