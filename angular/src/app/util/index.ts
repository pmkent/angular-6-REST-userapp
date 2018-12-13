import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './error-interceptor';

/** Http Interceptor providers in outside-in order */

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }
];

export class Index {}
