import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from '../_routes/profile-routing.module';
import { ProfileHomeComponent } from '../components/profile/profile-home/profile-home.component';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from 'src/types/medium-clone/models/profile/state/profile-reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetProfileEffect } from 'src/types/medium-clone/models/profile/state/effects/get-profile.effect';
import { SharedModule } from '../shared/shared/shared.module';
import { ProfileComponent } from '../_containers/profile/profile.component';
import { ProfileFeedComponent } from '../components/profile/profile-feed/profile-feed.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileHomeComponent,
        ProfileFeedComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SharedModule,
        RouterModule,
        StoreModule.forFeature('profile', profileReducer),
        EffectsModule.forFeature([GetProfileEffect])
    ]
})
export class ProfileModule { }
