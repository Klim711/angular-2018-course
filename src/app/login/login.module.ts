import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageEffects } from './store/login-page.effects';
import { StoreModule } from '@ngrx/store';
import { loginPageReducer } from './store/login-page.reducers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('loginPage', loginPageReducer),
    EffectsModule.forFeature([LoginPageEffects]),
  ],
  exports: [LoginPageComponent],
})
export class LoginModule { }
