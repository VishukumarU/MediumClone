import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteArticleAction } from 'src/types/medium-clone/models/article/state/actions/delete-article.action';

@Component({
    selector: 'app-article-meta',
    templateUrl: './article-meta.component.html',
    styleUrls: ['./article-meta.component.scss']
})
export class ArticleMetaComponent implements OnInit {

    @Input() article: MediumClone.IArticle;
    @Input() isAuthor: boolean | null;

    constructor (
        private store: Store<App.IAppState>
    ) { }

    ngOnInit (): void {
    }

    onDeleteArticle () {
        this.store.dispatch(deleteArticleAction({ slug: this.article.slug }));
    }

}
