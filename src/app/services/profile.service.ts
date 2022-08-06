import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    baseUrl = environment.apiURL;

    constructor (
        private http: HttpClient
    ) { }

    get (username: string): Observable<App.IProfile> {
        const fullUrl = `${this.baseUrl}/profiles/${username}`;
        return this.http.get<MediumClone.IProfileResponse>(fullUrl)
            .pipe(
                map(({ profile }) => profile)
            );
    }
}
