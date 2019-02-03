import { Injectable } from '@angular/core';
import { UserEntity } from '../user-entity';

const ONE_HOUR = Number('3.6e+6');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public logIn(user: UserEntity) {
    localStorage.setItem(`users.${user.email}`, JSON.stringify(user));
  }

  public logOut(email: string) {
    localStorage.removeItem(`users.${email}`);
  }

  public isAuthenticated(user: UserEntity): boolean {
    if (!user) {
      return false;
    }
    const userProfile = JSON.parse(
      localStorage.getItem(`users.${user.email}`));

    return userProfile && !this._isTokenExpired(userProfile.token);
  }

  private _isTokenExpired(token: number):boolean {
    return (Number(new Date()) - token) > ONE_HOUR;
  }

  public getUserInfo(): UserEntity {
    if (window.location.pathname === '/login') {
      return null;
    } else {
      const user = {
        id: 711,
        firstName: 'Klim',
        lastName: 'Shuplenkov',
        email: 'klim@example.com',
        token: Number(new Date()),
      };
      this.logIn(user);
      return user;
    }
  }
}
