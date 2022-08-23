import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { getArticleAction } from 'src/types/medium-clone/medium-clone';
import { deleteArticleAction } from 'src/types/medium-clone/models/article/state/actions/delete-article.action';
import { articleSelector, errorSelector, isLoadingSelector } from 'src/types/medium-clone/models/article/state/selectors';
import { currentUserSelector } from 'src/types/medium-clone/models/auth/state/selectors';
import { getCommentAction } from 'src/types/medium-clone/models/comment/state/actions/get-comment.action';
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
    isAuthor$: Observable<boolean>;
    username: string;
    isCommentLoading$: Observable<boolean>;
    comments$: Observable<MediumClone.IComment[] | null>;

    article: MediumClone.IArticle | null;
    subs = new Subscription();

    constructor (
        private store: Store<App.IAppState>,
        private route: ActivatedRoute) {

        this.username = this.route.snapshot.params['slug'];

        this.store.dispatch(getArticleAction({ slug: this.username }));


        this.isLoading$ = this.store.select(isLoadingSelector);
        this.error$ = this.store.select(errorSelector);
        this.article$ = this.store.select(articleSelector)

        this.isAuthor$ = combineLatest([
            this.article$,
            this.store.select(currentUserSelector)
        ]).pipe(
            map(([article, user]) => article?.author.username === user?.username)
        );

        this.store.dispatch(getCommentAction({ username: this.username }));
        this.isCommentLoading$ = this.store.select(isCommentLoadingSelector);
        this.comments$ = this.store.select(commentsSelector);

    }

    ngOnInit (): void {
    }

    ngOnDestroy (): void {
        this.subs.unsubscribe();
    }

}
