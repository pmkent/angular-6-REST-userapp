import { Injectable, Injector } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user';

import { tap, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

import {Observable, throwError} from 'rxjs';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usrUrl = 'api/user';

  constructor(
    private http: HttpClient,
    private authSvc: AuthService,
    private router: Router
    // private injector: Injector
  ) {}

  getHeaders(): { headers: HttpHeaders } {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': 'Bearer ' + this.authSvc.getToken()
      })
    };
    return httpOptions;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usrUrl, this.getHeaders())
      .pipe(
        tap(
          users => this.log(`fetched ${users.length} users`)),
          // catchError(this.handleError)
      );
  }

  // private handleError(error: HttpErrorResponse) {
  //   //const router = Router;
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //       // this.router.navigate(['login']);
  //       this.router.navigateByUrl('/login');
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError('Something bad happened; please try again later.');
  // };
  // public get router(): Router { //this creates router property on your service.
  //     return this.injector.get(Router);
  // }

  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user.id;
    const url = `${this.usrUrl}/${id}`;

    return this.http.delete<User>(url, this.getHeaders())
      .pipe(
        tap(_ => this.log(`deleted user id=${id}`))
      );
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.usrUrl}/${id}`;
    return this.http.get<User>(url, this.getHeaders())
      .pipe(
        tap(_ => this.log(`fetched user id=${id}`))
      );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usrUrl, user, this.getHeaders())
      .pipe(
        tap(_ => this.log(`updated user username=${user.email}`))
      );
  } 
  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usrUrl, user, this.getHeaders())
      .pipe(
        tap((user: User) => this.log(`added user username=${user.email}`))
      );
  }

  createUser(user: User) {
    return this.http.post(this.usrUrl, user);
  }

  private log(message: string) {
    console.log('usrSvc : '+message+'');
  }
  
}
