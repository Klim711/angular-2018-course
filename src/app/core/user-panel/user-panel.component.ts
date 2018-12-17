import { UserEntity } from './../user-entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  @Input() public user: UserEntity;

  constructor() { }

  ngOnInit() {
  }

  logOff() {
    alert('You are logged off');
  }
}
