import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor (
        private httpClient: HttpClient
    ) {
    }

    register (data: MediumClone.IRegisterUser): Observable<MediumClone.ICurrentUser> {
        const url = `${environment.apiURL}/users`;
        return this.httpClient.post<MediumClone.IAuthResponse>(url, data).pipe(
            map(({ user }) => user)
        );
    }

    login (data: MediumClone.ILoginRequest): Observable<MediumClone.ICurrentUser> {
        const url = `${environment.apiURL}/users/login`;
        return this.httpClient.post<MediumClone.IAuthResponse>(url, data).pipe(
            map(({ user }) => user)
        )
    }

    getCurrentUser (): Observable<MediumClone.ICurrentUser> {
        const url = `${environment.apiURL}/user`;
        return this.httpClient.get<MediumClone.IAuthResponse>(url).pipe(
            map(({ user }) => user)
        )
    }

}
