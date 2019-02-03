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
    this.authService.authUpdated.subscribe(() => {
      this.user = this.authService.getUserInfo();
    });
  }

  isAuthenticated():boolean {
    return this.authService.isAuthenticated(this.user);
  }

}
