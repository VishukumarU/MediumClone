import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from '../_routes/profile-routing.module';
import { ProfileComponent } from '../_containers/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from 'src/types/medium-clone/models/profile/state/profile-reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetProfileEffect } from 'src/types/medium-clone/models/profile/state/effects/get-profile.effect';


@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        StoreModule.forFeature('profile', profileReducer),
        EffectsModule.forFeature([GetProfileEffect])
    ]
})
export class ProfileModule { }
