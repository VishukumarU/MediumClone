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

    add (username: string, comment: MediumClone.IComment): Observable<MediumClone.IComment> {
        const url = `${this.baseUrl}/${username}/comments`;
        return this.http.post<MediumClone.ICommentResponse>(url, { comment })
            .pipe(
                map(({ comment }): MediumClone.IComment => comment)
            );
    }

    remove (username: string, id: number): Observable<{}> {
        const url = `${this.baseUrl}/${username}/comments/${id}`;
        return this.http.delete(url);
    }
}
