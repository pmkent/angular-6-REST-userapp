import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../model/user';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'api/user/login';

  constructor(private http: HttpClient, private router: Router) {}

  getHeaders(): { headers: HttpHeaders } {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
    };
    return httpOptions;
  }  

  login(username: string, password: string) {
    console.log('AuthSvc: login uname '+username+' pwd '+password);
    return this.http.post(this.loginUrl, JSON.stringify({ username: username, password: password }), this.getHeaders())
      .pipe(
        tap(
          (user: User) => {
            this.log(`Logged in user username=${user.email}`);
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        )
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    console.log('AuthSvc: logout currentUser '+localStorage.getItem('currentUser'));
  }

  private log(message: string) {
    console.log('usrSvc : '+message+'');
  }

  public getToken(): string {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : '';
  }

}