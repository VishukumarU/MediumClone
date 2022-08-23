import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { ClearFormService } from 'src/app/services/clear-form.service';
import { getArticleAction } from 'src/types/medium-clone/medium-clone';
import { articleSelector, errorSelector, isLoadingSelector } from 'src/types/medium-clone/models/article/state/selectors';
import { currentUserSelector } from 'src/types/medium-clone/models/auth/state/selectors';
import { addCommentAction } from 'src/types/medium-clone/models/comment/state/actions/add-comment.action';
import { getCommentAction } from 'src/types/medium-clone/models/comment/state/actions/get-comment.action';
import { removeCommentAction } from 'src/types/medium-clone/models/comment/state/actions/remove-comment.action';
import { commentsSelector, isCommentLoadingSelector } from 'src/types/medium-clone/models/comment/state/selectors';


@Component({
    selector: 'app-article-display',
    templateUrl: './article-display.component.html',
    styleUrls: ['./article-display.component.scss']
})
export class ArticleDisplayComponent implements OnInit, OnDestroy {

    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    article$: Observable<MediumClone.IArticle | null>;
    currentUser$: Observable<MediumClone.ICurrentUser | null>;
    isAuthor$: Observable<boolean>;
    username: string;
    isCommentLoading$: Observable<boolean>;
    comments$: Observable<MediumClone.IComment[] | null>;
    form: FormGroup;
    subs: Subscription;

    constructor (
        private store: Store<App.IAppState>,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private clearFormService: ClearFormService
    ) {
        this.subs = new Subscription();
        this.username = this.route.snapshot.params['slug'];
        this.store.dispatch(getArticleAction({ slug: this.username }));
        this.isLoading$ = this.store.select(isLoadingSelector);
        this.error$ = this.store.select(errorSelector);
        this.article$ = this.store.select(articleSelector);
        this.currentUser$ = this.store.select(currentUserSelector)
        this.isAuthor$ = combineLatest([
            this.article$,
            this.currentUser$
        ]).pipe(
            map(([article, user]) => article?.author.username === user?.username)
        );

        this.store.dispatch(getCommentAction({ username: this.username }));
        this.isCommentLoading$ = this.store.select(isCommentLoadingSelector);
        this.comments$ = this.store.select(commentsSelector);

        this.subs.add(
            this.clearFormService.clearForm$.subscribe(() => this.form.reset())
        );

    }

    ngOnInit (): void {
        this.form = this.fb.group({
            comment: new FormControl('')
        });
    }

    onAddComment (slug: string): void {
        const { comment } = this.form.value;
        this.store.dispatch(addCommentAction({
            slug,
            comment: {
                body: comment
            } as MediumClone.IComment
        }));
    }

    onRemoveComment (id: number, slug: string): void {
        this.store.dispatch(removeCommentAction({ slug, id }))
    }

    ngOnDestroy (): void {
        this.subs.unsubscribe();
    }

}
