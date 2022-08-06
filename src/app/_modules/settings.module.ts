import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from '../_routes/settings-routing.module';
import { SettingsComponent } from '../_containers/settings/settings.component';
import { UpdateCurrentUserEffect } from 'src/types/medium-clone/models/settings/state/effects/update-current-user.effect';
import { StoreModule } from '@ngrx/store';
import { SettingsReducer } from 'src/types/medium-clone/models/settings/state/settings.reducer';
import { SharedModule } from '../shared/shared/shared.module';
import { LogoutEffect } from 'src/types/medium-clone/models/settings/state/effects/logout.effect';


@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SettingsRoutingModule,
        SharedModule,
        EffectsModule.forFeature([UpdateCurrentUserEffect, LogoutEffect]),
        StoreModule.forFeature('settings', SettingsReducer)
    ]
})
export class SettingsModule { }
