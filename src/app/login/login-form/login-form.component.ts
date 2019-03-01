import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() public logIn: EventEmitter<Object> = new EventEmitter();
  public email: string = '';
  public password: string = '';

  constructor() {}

  ngOnInit() {
  }

  onEmailKey(event: KeyboardEvent) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  onPasswordKey(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  makeLogIn() {
    this.logIn.emit({
      email: this.email,
      password: this.password,
    })
  }
}
