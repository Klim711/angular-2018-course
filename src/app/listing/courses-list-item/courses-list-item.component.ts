import { CoursesListItem } from './../courses-list-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  @Input() public courseItem: CoursesListItem;
  constructor() { }

  ngOnInit() {
  }

  editCourse() {
    alert(`You are editing course ${this.courseItem.title}`);
  }

  deleteCourse() {
    alert(`You are going to delete course ${this.courseItem.title}`);
  }
}
