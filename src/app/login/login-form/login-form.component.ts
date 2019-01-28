import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  onEmailKey(event: KeyboardEvent) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  onPasswordKey(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  logIn() {
    alert(`You are kind of login by email: ${this.email}`);
  }
}
