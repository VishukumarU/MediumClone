import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    baseUrl = `${environment.apiURL}/articles`;

    constructor (
        private http: HttpClient
    ) { }

    query (username: string): Observable<MediumClone.IComment[]> {
        const url = `${this.baseUrl}/${username}/comments`;
        return this.http.get<MediumClone.ICommentListResponse>(url)
            .pipe(
                map(({ comments }) => comments)
            );
    }

    add (slug: string, comment: MediumClone.IComment): Observable<MediumClone.IComment> {
        const url = `${this.baseUrl}/${slug}/comments`;
        return this.http.post<MediumClone.ICommentResponse>(url, { comment })
            .pipe(
                map(({ comment }): MediumClone.IComment => comment)
            );
    }

    remove (slug: string, id: number): Observable<number> {
        const url = `${this.baseUrl}/${slug}/comments/${id}`;
        return this.http.delete(url).pipe(
            map(() => id)
        );
    }
}
