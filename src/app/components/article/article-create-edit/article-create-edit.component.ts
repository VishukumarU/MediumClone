import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable, Subscription } from 'rxjs';
import * as MediumClone from 'src/types/medium-clone/medium-clone';
import { articleSelector, backEndErrorsSelector, isLoadingSelector } from 'src/types/medium-clone/models/article/state/selectors';

@Component({
    selector: 'app-article-create-edit',
    templateUrl: './article-create-edit.component.html',
    styleUrls: ['./article-create-edit.component.scss']
})
export class ArticleCreateEditComponent implements OnInit, OnDestroy {

    initialValues$: Observable<MediumClone.IArticleInput>;
    isSubmitting$: Observable<boolean>;
    backEndErrors$: Observable<MediumClone.IBackEndErrors | null>;
    subs: Subscription;
    selectedArticle: MediumClone.IArticle;
    private _mode: string;
    @Input() set mode (value: string) {
        this._mode = value;
        if (value === 'edit') {
            this.store.dispatch(MediumClone.getArticleEditAction({ slug: this.route.snapshot.params['slug'] }));
        }
    }

    get mode () {
        return this._mode;
    }

    constructor (
        private store: Store<App.IAppState>,
        private route: ActivatedRoute
    ) {
        this.subs = new Subscription();
        this.isSubmitting$ = this.store.select(isLoadingSelector);
        this.backEndErrors$ = this.store.select(backEndErrorsSelector);
        this.initialValues$ = this.store.select(articleSelector).pipe(
            filter((article) => !!article),
            map((article) => {
                this.selectedArticle = article!;
                return {
                    body: article!.body,
                    description: article!.description,
                    tagList: article!.tagList,
                    title: article!.title
                }
            })
        );

        // this.subs.add(
        //     this.store.select(articleSelector).subscribe(article => {
        //         if (article) {
        //             this.selectedArticle = article;
        //             this.initialValues = {
        //                 body: article.body,
        //                 description: article.description,
        //                 tagList: article.tagList,
        //                 title: article.title
        //             }
        //         }
        //     })
        // );
    }


    ngOnInit (): void {
    }

    onSubmit (value: MediumClone.IArticleFormValue) {

        if (this.mode === 'create') {

            const article: MediumClone.IArticleInput = {
                ...value,
                tagList: value.tagList.split(',').map(tag => tag.trim())
            }
            this.store.dispatch(MediumClone.insertArticleAction({ article }));
        } else {
            const article: MediumClone.IArticle = {
                ...this.selectedArticle,
                ...value,
                tagList: value.tagList.split(',').map(tag => tag.trim())
            }
            this.store.dispatch(MediumClone.updateArticleAction({ article }));
        }

    }

    ngOnDestroy (): void {
        this.subs.unsubscribe();
    }

}
