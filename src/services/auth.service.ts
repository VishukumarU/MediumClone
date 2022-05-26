import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // url: string;

    constructor(
        private httpClient: HttpClient
    ) {
        // this.url = 'https://conduit.productionready.io/api';
    }

    register (data: MediumClone.IRegisterRequest): Observable<MediumClone.ICurrentUser> {

        const url = `${environment.apiURL}/users`;

        return this.httpClient.post<MediumClone.IAUthResponse>(url, data).pipe(
            map(({ user }) => user)
        );
    }

}
