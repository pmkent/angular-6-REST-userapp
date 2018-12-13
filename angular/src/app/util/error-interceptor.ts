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

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return next.handle(req);
        return next.handle(req)
            .pipe(
                tap(
                    (event: HttpEvent<any>) => {
                        if(event instanceof HttpResponse){
                            // if the token is valid
                        }
                    },
                    (error: any) => {
                        // if the token has expired.
                        if(error instanceof HttpErrorResponse) {
                            if(error.status === 401){
                                // this is where you can do anything like navigating  
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
    }

    // handleError(error: HttpErrorResponse) {
    //     if (error.error instanceof ErrorEvent) {
    //       // A client-side or network error occurred. Handle it accordingly.
    //       console.error('An error occurred:', error.error.message);
    //     } else {
    //       // The backend returned an unsuccessful response code.
    //       // The response body may contain clues as to what went wrong,
    //       console.error(
    //         `Backend returned code 3333 ${error.status}, ` +
    //         `body was: ${error.error}`);
    //         // this.router.navigate(['login']);
    //         this.router.navigateByUrl('/login');
    //     }
    //     // return an observable with a user-facing error message
    //     return throwError(
    //       '222:Something bad happened; please try again later.');
    //   };

    public get router(): Router { //this creates router property on your service.
        return this.injector.get(Router);
    }
}