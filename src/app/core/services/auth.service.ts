import { Injectable } from '@angular/core';
import { UserEntity } from '../user-entity';

const ONE_HOUR = Number('6e+4');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public logIn(email: string, password: string) {
    const userProfile = { // TODO: add model for userProfile
      email,
      password,
      token: Number(new Date()),
    };

    localStorage.setItem(`users.${email}`, JSON.stringify(userProfile));
  }

  public logOut(email: string) {
    localStorage.removeItem(`users.${email}`);
  }

  public isAuthenticated(email: string): boolean {
    const userProfile = JSON.parse(localStorage.getItem(`users.${email}`));

    if (!userProfile || this._isTokenExpired(userProfile.token)) {
      return false;
    } else {
      return true;
    }
  }

  private _isTokenExpired(token: number):boolean {
    return (Number(new Date()) - token) > ONE_HOUR;
  }

  public getUserInfo(): UserEntity {
    // TODO: return user info based on some param
    return {
      id: 711,
      firstName: 'Klim',
      lastName: 'Shuplenkov',
      email: 'klim@example.com',
    };
  }
}
