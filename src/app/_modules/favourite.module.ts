import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavouriteComponent } from '../shared/components/add-to-favourite/add-to-favourite.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IncreaseCountEffect } from 'src/types/medium-clone/models/favourite/state/effects/increase-count.effect';
import { DecreaseCountEffect } from 'src/types/medium-clone/models/favourite/state/effects/decrease-count.effect';
import { favouriteReducer } from 'src/types/medium-clone/models/favourite/state/favourite.reducer';



@NgModule({
    declarations: [
        AddToFavouriteComponent
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([DecreaseCountEffect, IncreaseCountEffect]),
        StoreModule.forFeature('favourite', favouriteReducer)
    ],
    exports: [
        AddToFavouriteComponent
    ]
})
export class FavouriteModule { }
