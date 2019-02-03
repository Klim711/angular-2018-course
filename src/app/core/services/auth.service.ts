import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../user.interface';
import { UserModel } from '../models/user-model.class';

const ONE_HOUR = Number('3.6e+6');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authUpdated:EventEmitter<any> = new EventEmitter();

  constructor() { }

  public logIn(userContent: {email: string, password: string}) {
    const token = Number(new Date());
    const user = new UserModel({
      ...userContent,
      token,
    });
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.authUpdated.emit();
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
