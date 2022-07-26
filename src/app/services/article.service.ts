import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    baseURL = `${environment.apiURL}/articles`;

    constructor (
        private http: HttpClient
    ) { }

    getArticle (slug: string): Observable<MediumClone.IArticle> {
        const url = `${this.baseURL}/${slug}`;
        return this.http.get<MediumClone.IArticleResponse>(url)
            .pipe(
                map(({ article }) => article)
            );
    }

    delete (slug: string): Observable<{}> {
        const url = `${this.baseURL}/${slug}`;

        return this.http.delete<{}>(url);
    }
}
