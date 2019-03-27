import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap, withLatestFrom } from 'rxjs/operators';
import {
  LoginPageActionsTypes,
  LoginPageActionsUnion,
  Login,
  LoginSuccess,
} from './login-page.actions';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';

@Injectable()
export class LoginPageEffects {
 
  @Effect()
  login$ = this.actions$.pipe(
    ofType(LoginPageActionsTypes.Login),
    map((action: Login) => action.payload),
    mergeMap((credentials) =>
      this.authService.logIn(credentials).pipe(
        map(() => new LoginSuccess())
      )
    )
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType(LoginPageActionsTypes.LoginSuccess),
    withLatestFrom(this.store),
    map(([action, state]) => {
      const returnPage = state.loginPage.returnPage;
      this.router.navigate([returnPage]);
    })
  );
 
  constructor(
    private actions$: Actions<LoginPageActionsUnion>,
    private authService: AuthService,
    private router: Router,
    private store: Store<any>
  ) {}
}
