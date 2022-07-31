import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from '../_routes/article-routing.module';
import { ArticleDisplayComponent } from '../components/article/article-display/article-display.component';
import { StoreModule } from '@ngrx/store';
import { articleReducer } from 'src/types/medium-clone/models/article/state/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from 'src/types/medium-clone/models/article/state/effects/get-article.effect';
import { SharedModule } from '../shared/shared/shared.module';
import { DeleteArticleEffect } from 'src/types/medium-clone/models/article/state/effects/delete-article.effect';
import { ArticleComponent } from '../_containers/article/article.component';
import { ArticleFormComponent } from '../components/article/article-form/article-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertArticleEffect } from 'src/types/medium-clone/models/article/state/effects/insert-article.effect';
import { ArticleCreateEditComponent } from '../components/article/article-create-edit/article-create-edit.component';
import { UpdateArticleEffect } from 'src/types/medium-clone/models/article/state/effects/update-article.effect';


@NgModule({
    declarations: [
        ArticleComponent,
        ArticleDisplayComponent,
        ArticleCreateEditComponent,
        ArticleFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ArticleRoutingModule,
        StoreModule.forFeature('article', articleReducer),
        EffectsModule.forFeature([
            GetArticleEffect,
            DeleteArticleEffect,
            InsertArticleEffect,
            UpdateArticleEffect
        ]),
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ArticleModule { }
