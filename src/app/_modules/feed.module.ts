import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GetFeedEffect } from 'src/types/medium-clone/models/feed/state/effects/get-feed.effect';
import { feedReducers } from 'src/types/medium-clone/models/feed/state/feed.reducer';
import { GlobalFeedComponent } from '../_containers/global-feed/global-feed.component';
import { FeedComponent } from '../components/feed/feed.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
    declarations: [
        GlobalFeedComponent,
        FeedComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', feedReducers),
    ],
    exports: [
        GlobalFeedComponent
    ]
})
export class FeedModule { }
