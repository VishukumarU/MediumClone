import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor(
        private http: HttpClient
    ) { }

    get (url: string): Observable<MediumClone.IFeedResponse> {
        const requestUrl = environment.apiURL + url;
        return this.http.get<MediumClone.IFeedResponse>(requestUrl)
    }
}
