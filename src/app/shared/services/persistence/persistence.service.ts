import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PersistenceService {

    constructor () { }

    set (key: string, data: any) {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.error('Error saving to local storage', error);
        }
    }

    get (key: string): string | null {
        try {
            return JSON.parse(localStorage.getItem(key) || '{}');
        } catch (error) {
            console.error('Error getting data from the localstorage', error);
            return null;
        }
    }

    remove (key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing key from local storage', error);
        }
    }
}
