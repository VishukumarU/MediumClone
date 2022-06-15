import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/types/medium-clone/enums';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    region = Region;

    state: {
        mode: Region.Login | Region.Register
    };

    constructor(
        private route: ActivatedRoute
    ) {
        this.state = {
            mode: this.route.snapshot.data['region'] || Region.Login
        };
    }

    ngOnInit (): void {
    }

}
