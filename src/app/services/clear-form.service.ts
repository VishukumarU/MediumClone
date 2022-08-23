import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClearFormService {

    private clearFormSrc: Subject<void> = new Subject();
    clearForm$ = this.clearFormSrc.asObservable();

    constructor () {
    }

    clearForm () {
        this.clearFormSrc.next();
    }
}
