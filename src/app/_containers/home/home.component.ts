import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from 'src/types/medium-clone/medium-clone';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    state = {
        mode: 'feed'
    };

    constructor (private store: Store,
        private route: ActivatedRoute) {

        console.log(this.route.snapshot);

        this.state.mode = this.route.snapshot.data['mode'];
    }

    ngOnInit (): void {
        // this.store.dispatch(getCurrentUserAction());
    }

}
