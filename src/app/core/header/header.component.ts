import { UserEntity } from './../user-entity';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: UserEntity;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUserInfo();
  }

  isAuthenticated():boolean {
    return this.authService.isAuthenticated(this.user);
  }

}
