import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    baseURL = environment.apiURL + '/user';

    constructor (
        private httpClient: HttpClient
    ) { }

    updateCurrentUser (user: MediumClone.ICurrentUserInput): Observable<MediumClone.ICurrentUser> {
        return this.httpClient.put<MediumClone.IAuthResponse>(this.baseURL, { user })
            .pipe(
                map(({ user }) => user)
            );
    }
}
