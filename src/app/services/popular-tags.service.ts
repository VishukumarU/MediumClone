import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PopularTagsService {

    constructor (
        private http: HttpClient
    ) { }

    getPopularTags (): Observable<string[]> {
        const url = `${environment.apiURL}/tags`;
        return this.http.get<MediumClone.IPopularTagsResponse>(url).pipe(
            map(({ tags }) => tags)
        );
    }
}
