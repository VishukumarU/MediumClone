import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    state = {
        mode: ''
    };

    constructor (
        private route: ActivatedRoute
    ) {
        this.state.mode = this.route.snapshot.data['mode'];
    }

    ngOnInit (): void {
    }
}
