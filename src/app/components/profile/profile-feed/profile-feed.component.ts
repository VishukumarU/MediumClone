import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile-feed',
    templateUrl: './profile-feed.component.html',
    styleUrls: ['./profile-feed.component.scss']
})
export class ProfileFeedComponent implements OnInit {

    @Input() profile: App.IProfile;
    @Input() apiUrl: string;

    constructor () { }

    ngOnInit (): void {
    }

}
