import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-global-feed',
    templateUrl: './global-feed.component.html',
    styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {

    apiUrl = '';

    @Input() set mode (value: string) {

        if (value === 'your-feed') {
            this.apiUrl = '/articles/feed';
        } else {
            this.apiUrl = '/articles';
        }
    }

    constructor (private route: ActivatedRoute) { }

    ngOnInit (): void {
    }

}
