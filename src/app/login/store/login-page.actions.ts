import { Action } from '@ngrx/store';

export enum LoginPageActionsTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Login Page] LoginSuccess',
  SetReturnPage = '[Login Page] SetReturnPage',
}

export class Login implements Action {
  readonly type = LoginPageActionsTypes.Login;

  constructor(public payload: {email: string, password:string}) {}
}


export class LoginSuccess implements Action {
  readonly type = LoginPageActionsTypes.LoginSuccess;
}

export class SetReturnPage implements Action {
  readonly type = LoginPageActionsTypes.SetReturnPage;

  constructor(public payload: string) {}
}


export type LoginPageActionsUnion =
  | Login
  | LoginSuccess
  | SetReturnPage;
