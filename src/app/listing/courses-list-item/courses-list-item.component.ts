import { Course } from '../../shared/interfaces/course.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {
  @Output() public delete: EventEmitter<number> = new EventEmitter();
  @Input() public courseItem:Course;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  editCourse() {
    this.router.navigate(['/course', this.courseItem.id]);
  }

  deleteCourse() {
    if (confirm(`You are going to delete course ${this.courseItem.name}`)) {
      this.delete.emit(this.courseItem.id);
    }
  }
}
