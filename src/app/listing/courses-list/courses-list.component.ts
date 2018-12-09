import { CoursesListItem } from './../courses-list-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() public courses: CoursesListItem[];

  constructor() { }

  ngOnInit() {
  }

}
