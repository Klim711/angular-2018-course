import { Course } from '../../shared/interfaces/course.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit {
  @Input() public courses: Course[];
  @Output() public loadMore: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  loadMoreCourses() {
    this.loadMore.emit();
  }
}
