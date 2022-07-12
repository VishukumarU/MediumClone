import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistenceService } from '../services/persistence/persistence.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private persistenceService: PersistenceService) { }

    intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.persistenceService.get('accessToken');

        request = request.clone({
            setHeaders: {
                Authorization: token ? `Token ${token}` : ''
            }
        })

        return next.handle(request);
    }
}
