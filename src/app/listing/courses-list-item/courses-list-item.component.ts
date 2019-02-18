import { CoursesListItem } from './../courses-list-item.model';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {
  @Input() public courseItem: CoursesListItem;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  editCourse() {
    alert(`You are editing course ${this.courseItem.title}`);
  }

  deleteCourse() {
    if (confirm(`You are going to delete course ${this.courseItem.title}`)) {
      this.coursesService.deleteCourse(this.courseItem.id);
    }
  }
}
