import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from '../components/backend-error-messages/backend-error-messages.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { BannerComponent } from '../components/banner/banner.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { TagComponent } from '../components/tag/tag.component';
import { PopularTagsComponent } from '../components/popular-tags/popular-tags.component';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from 'src/types/medium-clone/models/popular-tags/state/effects/get-popular-tags.effect';
import { StoreModule } from '@ngrx/store';
import { popularTagsReducers } from 'src/types/medium-clone/models/popular-tags/state/popular-tags.reducer';
import { FeedTogglerComponent } from '../components/feed-toggler/feed-toggler.component';
import { AddToFavouriteComponent } from '../components/add-to-favourite/add-to-favourite.component';
import { DecreaseCountEffect } from 'src/types/medium-clone/models/favourite/state/effects/decrease-count.effect';
import { IncreaseCountEffect } from 'src/types/medium-clone/models/favourite/state/effects/increase-count.effect';
import { FavouriteModule } from 'src/app/_modules/favourite.module';
import { FollowButtonComponent } from '../components/follow-button/follow-button.component';



@NgModule({
    declarations: [
        BackendErrorMessagesComponent,
        LoaderComponent,
        BannerComponent,
        ErrorMessageComponent,
        PaginationComponent,
        TagComponent,
        PopularTagsComponent,
        FeedTogglerComponent,
        FollowButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FavouriteModule,
        EffectsModule.forFeature([GetPopularTagsEffect]),
        StoreModule.forFeature('popularTags', popularTagsReducers)
    ],
    exports: [
        BackendErrorMessagesComponent,
        LoaderComponent,
        BannerComponent,
        ErrorMessageComponent,
        PaginationComponent,
        TagComponent,
        PopularTagsComponent,
        FeedTogglerComponent,
        FollowButtonComponent,
        FavouriteModule
    ]
})
export class SharedModule { }
