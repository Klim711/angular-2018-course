import { Course } from '../../shared/interfaces/course.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {
  @Input() public courseItem:Course;
  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  editCourse() {
    this.router.navigate(['/course', this.courseItem.id]);
  }

  deleteCourse() {
    if (confirm(`You are going to delete course ${this.courseItem.title}`)) {
      this.coursesService.deleteCourse(this.courseItem.id);
    }
  }
}
