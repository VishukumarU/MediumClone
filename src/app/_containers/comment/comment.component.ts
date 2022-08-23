import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    @Input() comment: MediumClone.IComment;
    isAuthor: boolean | null;

    constructor (
        private store: Store<App.IAppState>
    ) { }

    ngOnInit (): void {
    }

}
