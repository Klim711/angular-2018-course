import { User } from '../user.interface';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  @Input() public user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logOff() {
    this.authService.logOut(this.user.email);
    alert('You are logged off');
  }
}
