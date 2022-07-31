import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { getArticleAction } from 'src/types/medium-clone/medium-clone';
import { deleteArticleAction } from 'src/types/medium-clone/models/article/state/actions/delete-article.action';
import { articleSelector, errorSelector, isLoadingSelector } from 'src/types/medium-clone/models/article/state/selectors';
import { currentUserSelector } from 'src/types/medium-clone/models/auth/state/selectors';


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
    article: MediumClone.IArticle | null;
    subs = new Subscription();

    constructor (
        private store: Store<App.IAppState>,
        private route: ActivatedRoute) {
        this.store.dispatch(getArticleAction({ slug: this.route.snapshot.params['slug'] }));


        this.isLoading$ = this.store.select(isLoadingSelector);
        this.error$ = this.store.select(errorSelector);
        this.article$ = this.store.select(articleSelector)

        this.isAuthor$ = combineLatest([
            this.article$,
            this.store.select(currentUserSelector)
        ]).pipe(
            map(([article, user]) => article?.author.username === user?.username)
        )
    }

    ngOnInit (): void {
    }

    onDeleteArticle (slug: string) {
        this.store.dispatch(deleteArticleAction({ slug }));
    }

    ngOnDestroy (): void {
        this.subs.unsubscribe();
    }

}
