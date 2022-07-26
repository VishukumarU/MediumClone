import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from '../_routes/article-routing.module';
import { ArticleComponent } from '../_containers/article/article.component';
import { StoreModule } from '@ngrx/store';
import { articleReducer } from 'src/types/medium-clone/models/article/state/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from 'src/types/medium-clone/models/article/state/effects/get-article.effect';
import { SharedModule } from '../shared/shared/shared.module';
import { DeleteArticleEffect } from 'src/types/medium-clone/models/article/state/effects/delete-article.effect';


@NgModule({
    declarations: [
        ArticleComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ArticleRoutingModule,
        StoreModule.forFeature('article', articleReducer),
        EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect])
    ]
})
export class ArticleModule { }
