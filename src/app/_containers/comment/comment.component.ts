import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { currentUserSelector } from 'src/types/medium-clone/models/auth/state/selectors';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    @Input() isAuthor: boolean;
    @Input() comment: MediumClone.IComment;
    @Output() removeComment: EventEmitter<number> = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    onRemoveComment (): void {
        this.removeComment.emit(this.comment.id);
    }

}
