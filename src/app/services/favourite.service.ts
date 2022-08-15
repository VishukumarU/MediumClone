import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FavouriteService {

    baseUrl = '';

    constructor (
        private http: HttpClient
    ) {
        this.baseUrl = `${environment.apiURL}/articles`;
    }

    add (slug: string): Observable<MediumClone.IArticle> {
        const url = `${this.baseUrl}/${slug}/favorite`;
        return this.http.post<MediumClone.IArticleResponse>(url, {})
            .pipe(
                map(({ article }) => article)
            );
    }

    remove (slug: string): Observable<MediumClone.IArticle> {
        const url = `${this.baseUrl}/${slug}/favorite`;
        return this.http.delete<MediumClone.IArticleResponse>(url)
            .pipe(
                map(({ article }) => article)
            );
    }
}
