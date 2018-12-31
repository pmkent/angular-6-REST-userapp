import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  ) {}

  getHeaders(): { headers: HttpHeaders } {
    const httpOptions = {
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
      tap(users => this.log(`Fetched all ${users.length} users.`)),
      catchError(this.handleError('getUsers', []))
    );
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usrUrl}/${id}`;

    return this.http.delete<User>(url, this.getHeaders()).pipe(
      tap(_ => this.log(`Deleted user userId=${id}`)),
      tap((usr: User) => this.log(`Deleted user w/ username=${usr.username}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  getUser(id: string): Observable<User> {
    const url = `${this.usrUrl}/${id}`;
    return this.http.get<User>(url, this.getHeaders()).pipe(
      tap(_ => this.log(`Fetched one user id=${id}`)),
      tap((usr: User) => this.log(`Fetched one user w/ dateOfBirth=${usr.dateOfBirth}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  getUserByUsername(username: string): Observable<User> {
    const url = `${this.usrUrl}/username/${username}`;
    return this.http.get<User>(url, this.getHeaders())
      .pipe(
        tap(_ => this.log(`Fetched user by username=${username}`)),
        catchError(this.handleError<User>(`getUserByUsername username=${username}`))
      );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usrUrl, user, this.getHeaders()).pipe(
      tap(_ => this.log(`Updated user userId=${user.userId}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usrUrl, user, this.getHeaders()).pipe(
      tap((usr: User) => this.log(`Added user w/ userId=${usr.userId}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /* GET users whose name contains search term */ // TODO Test and use this
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty user array.
      return of([]);
    }
    return this.http.get<User[]>(this.usrUrl + `/search?name=${term}`, this.getHeaders()).pipe(
      tap(_ => this.log(`Found user(s) matching "${term}"`)),
      catchError(
        this.handleError<User[]>('searchUsers', [])
      )
    );
  }

  private log(message: string) {
    console.log('usrSvc : ' + message + '');
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      if (error.status === 401) {
        localStorage.removeItem('currentUser');
        // this.router.navigateByUrl('/login');
        console.log('@@@@@ Trapped authentication error');
      } else if (error.status === 403) {
        console.log('%%%% Trapped duplicate user error');
      } else if (error.status === 500) {
        console.log('#### Error 500 happened. Ooops!');
        this.authSvc.logout();
        this.router.navigateByUrl('/login');
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
