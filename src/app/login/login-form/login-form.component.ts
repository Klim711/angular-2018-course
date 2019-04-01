import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() public logIn: EventEmitter<Object> = new EventEmitter();
  public email: FormControl;
  public password: FormControl;

  constructor() {}

  ngOnInit() {
    this.email = new FormControl();
    this.password = new FormControl();
  }

  makeLogIn() {
    this.logIn.emit({
      email: this.email.value,
      password: this.password.value,
    })
  }
}
