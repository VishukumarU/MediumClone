import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-global-feed',
    templateUrl: './global-feed.component.html',
    styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {

    apiUrl = '';

    @Input() set mode (value: string) {
        if (value === 'feed') {
            this.apiUrl = '/articles';
        } else {
            this.apiUrl = '/articles/feed';
        }
    }

    constructor () { }

    ngOnInit (): void {
    }

}
