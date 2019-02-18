import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../user.interface';
import { UserModel } from '../models/user-model.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const ONE_HOUR = Number('3.6e+6');

const LOGIN_SOURCE = `http://localhost:3004/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authUpdated:EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {}

  public logIn(userContent: {email: string, password: string}):Observable<any> {
    const data = {
      login: userContent.email,
      password: userContent.password,
    };

    return this.http.post(`${LOGIN_SOURCE}/login`, {data})
      .pipe(
        tap(({token}) => {
          localStorage.setItem('token', JSON.stringify({
            date: new Date(),
            token: token,
          }));
        }),
      );
  }

  public getToken():{date: string, token: string} {
    return JSON.parse(localStorage.getItem('token'));
  }

  public logOut() {
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    const tokenObject = this.getToken();

    return tokenObject && !this._isTokenExpired(tokenObject.date);
  }

  private _isTokenExpired(tokenDate: string):boolean {
    return (Number(new Date()) - Number(new Date(tokenDate))) > ONE_HOUR;
  }

  public getUserInfo(): Observable<User> {
    const {token} = this.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token,
      })
    };
    return this.http.post<User>(`${LOGIN_SOURCE}/userinfo`, null, httpOptions);
  }
}
