import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from '../_routes/auth-routing.module';
import { RegisterComponent } from '../components/auth/register/register.component';
import { authReducers } from 'src/types/medium-clone/models/auth/state/auth.reducers';
import { AuthComponent } from '../_containers/auth/auth.component';
import { RegisterEffect } from 'src/types/medium-clone/models/auth/state/effects/register.effect';
import { SharedModule } from '../shared/shared/shared.module';
import { LoginComponent } from '../components/auth/login/login.component';
import { LoginEffect } from 'src/types/medium-clone/models/auth/state/effects/login.effect';


@NgModule({
    declarations: [
        AuthComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('auth', authReducers),
        EffectsModule.forFeature([RegisterEffect, LoginEffect])
    ]
})
export class AuthModule { }
