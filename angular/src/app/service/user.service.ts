import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usrUrl = 'api/user';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authSvc: AuthService
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
        tap(users => this.log(`fetched ${users.length} users`))
      );
  }

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

    // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: User[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }

  /*
  private baseUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  */
}
