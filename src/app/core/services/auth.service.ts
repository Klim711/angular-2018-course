import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../user.interface';
import { UserModel } from '../models/user-model.class';
import { HttpClient } from '@angular/common/http';

const ONE_HOUR = Number('3.6e+6');

const LOGIN_SOURCE = `http://localhost:3004/auth/login`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authUpdated:EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {}

  public logIn(userContent: {email: string, password: string}) {
    const data = {
      login: userContent.email,
      password: userContent.password,
    };

    return this.http.post(`${LOGIN_SOURCE}`, {data});
  }

  public logOut() {
    localStorage.removeItem('currentUser');
    this.authUpdated.emit();
  }

  public isAuthenticated(): boolean {
    const user = this.getUserInfo();
    if (!user) {
      return false;
    }
    const userProfile = this.getUserInfo();

    return userProfile && !this._isTokenExpired(userProfile.token);
  }

  private _isTokenExpired(token: number):boolean {
    return (Number(new Date()) - token) > ONE_HOUR;
  }

  public getUserInfo(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
