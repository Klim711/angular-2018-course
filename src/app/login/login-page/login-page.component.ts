import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store/login-page.reducers';
import { SetReturnPage, Login } from '../store/login-page.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/listing']);
    }
    this.route.queryParams.subscribe((params) => {
      this.store.dispatch(new SetReturnPage(params.return || '/listing'));
    });
  }

  logIn(credentials: {email: string, password:string}) {
    this.store.dispatch(new Login(credentials));
  }
}
