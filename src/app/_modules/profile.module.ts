import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from '../_routes/profile-routing.module';
import { ProfileHomeComponent } from '../components/profile/profile-home/profile-home.component';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from 'src/types/medium-clone/models/profile/state/profile-reducer';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared/shared.module';
import { ProfileComponent } from '../_containers/profile/profile.component';
import { ProfileFeedComponent } from '../components/profile/profile-feed/profile-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from './feed.module';
import { GetProfileEffect } from 'src/types/medium-clone/models/profile/state/effects/get-profile.effect';
import { AddFollowEffect } from 'src/types/medium-clone/models/profile/state/effects/add-follow.effect';
import { RemoveFollowEffect } from 'src/types/medium-clone/models/profile/state/effects/remove-follow.effect';

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
        FeedModule,
        StoreModule.forFeature('profile', profileReducer),
        EffectsModule.forFeature([GetProfileEffect, AddFollowEffect, RemoveFollowEffect])
    ]
})
export class ProfileModule { }
