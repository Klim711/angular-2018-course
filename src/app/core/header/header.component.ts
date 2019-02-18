import { User } from '../user.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe((user: User) => {
      this.user = user;
    });
  }

  isAuthenticated():boolean {
    return this.authService.isAuthenticated();
  }

}
