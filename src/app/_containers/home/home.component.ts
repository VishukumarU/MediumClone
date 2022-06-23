import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from 'src/types/medium-clone/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private store: Store) { }

    ngOnInit (): void {
        this.store.dispatch(getCurrentUserAction());
    }

}
