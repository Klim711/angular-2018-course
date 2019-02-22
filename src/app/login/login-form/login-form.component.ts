import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onEmailKey(event: KeyboardEvent) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  onPasswordKey(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  logIn() {
    this.authService.logIn({
      email: this.email,
      password: this.password,
    });
    this.router.navigate(['/listing']);
  }
}
