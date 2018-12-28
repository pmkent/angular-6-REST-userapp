import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
// import { tap, catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return next.handle(request);
        //////////////////////////
        // const idToken = localStorage.getItem('id_token');

        // if (idToken) {
        //     const cloned = request.clone({
        //         headers: request.headers.set('Authorization',
        //             'Bearer ' + idToken)
        //     });

        //     return next.handle(cloned);
        // } else {
        //     return next.handle(request);
        // }
        ////////////////////////

        // Let's then break down how this code works line by line:
        // 1. we first start by retrieving the JWT string from Local Storage directly
        // 2. then we are going to check if the JWT is present
        // 3. if the JWT is not present, then the request goes through to the server unmodified
        // 4. if the JWT is present, then we will clone the HTTP headers, and add an extra Authorization header, which will contain the JWT

        ///////////////////////////////
        return next.handle(request)
            .pipe(
                tap(
                    (event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            // if the token is valid
                        }
                    },
                    (error: any) => {
                        // if the token has expired.
                        if (error instanceof HttpErrorResponse) {
                            if (error.status === 401) {
                                // this is where you can do anything like navigating
                                this.router.navigateByUrl('/login'); // send user to login 2018-12-24
                            }
                            if (error.status === 403) {
                                // this is where you can do anything like navigating
                                this.router.navigateByUrl('/register'); // send user to registration page 2018-12-24
                            }
                            if (error.status === 500) {
                                this.router.navigateByUrl('/login');
                            }
                            console.error(
                                `ErrIntercept: Backend returned code ${error.status}, ` +
                                `body was: ${error.error}`
                            );
                        }
                    }
                )
            );
            ////////////////
    }

    public get router(): Router { // this creates router property on your service.
        return this.injector.get(Router);
    }
}
