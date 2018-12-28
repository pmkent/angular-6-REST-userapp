import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../model/user';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'api/user/login';
  private _loggedInUser?: User; // 2018-12-24

  constructor(private http: HttpClient, private router: Router) {}

  getHeaders(): { headers: HttpHeaders } {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
    };
    return httpOptions;
  }

  get loggedInUser(): User {
    return this._loggedInUser;
  }
  set loggedInUser(user: User) {
      this._loggedInUser = user;
  }

  login(username: string, password: string) {

    return this.http.post<User>(this.loginUrl, JSON.stringify({ username: username, password: password }), this.getHeaders())
      .pipe(
        tap(
          (user: User) => {
            console.log('Login: You are trying to log in as ' + username + ' pw  ' + password + ' null data? ' + (user === null) +
            ' undefined?? ' + (user === undefined) + '!! ??? ' + ((user == null) || (user === undefined)));
            if (
              (user == null) ||
              (user === undefined)
            ) {
              this.router.navigate(['login']);
            } else {
              this.log(`Logged in user username=${username} password${password}`);
              localStorage.setItem('currentUser', JSON.stringify(user));
            }
          }
        ),
        catchError(this.handleError<User>('login'))
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    console.log('AuthSvc: logout currentUser ' + localStorage.getItem('currentUser'));
    this.loggedInUser = null; // 2018-12-24
  }

  private log(message: string) {
    console.log('authSvc : ' + message + '');
  }

  public getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.token;
    return token ? token : '';
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
        this.router.navigateByUrl('/login');
        console.log('@@@@@ Authentication error');
      } else if (error.status === 403) {
        console.log('%%%% Duplicate user error');
      } else if (error.status === 500) {
        console.log('#### Error 500 happened. Ooops!');
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // https://itnext.io/angular-tutorial-implement-refresh-token-with-httpinterceptor-bfa27b966f57
  refreshAccessToken() { this.log('Refresh token called. Not yet implemented!'); }

}
