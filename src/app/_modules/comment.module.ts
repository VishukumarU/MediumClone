import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../_containers/comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AddCommentEffect } from 'src/types/medium-clone/models/comment/state/effects/add-comment.effect';
import { commentReducer } from 'src/types/medium-clone/models/comment/state/comment.reducer';
import { GetCommentEffect } from 'src/types/medium-clone/models/comment/state/effects/get-comment.effect';
import { RouterModule } from '@angular/router';
import { RemoveCommentEffect } from 'src/types/medium-clone/models/comment/state/effects/remove-comment.effect';



@NgModule({
    declarations: [
        CommentComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        StoreModule.forFeature('comment', commentReducer),
        EffectsModule.forFeature([AddCommentEffect, GetCommentEffect, RemoveCommentEffect])
    ],
    exports: [
        CommentComponent
    ]
})
export class CommentModule { }
