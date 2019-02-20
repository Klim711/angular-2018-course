import { Course } from '../../shared/interfaces/course.interface';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css'],
})
export class ListingPageComponent implements OnInit {
  public courses: Course[] = [];
  public pageSize: number = 10;
  public pageNumber: number = 1;
  private searchValue: string = '';

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getCoursesList();
    this.coursesService.searchValueUpdated.subscribe((value) => {
      this.searchValue = value || '';
      this.pageNumber = 1;
      this.getCoursesList();
    });
  }

  getCoursesList() {
    this.coursesService
      .getCoursesList(this.pageNumber, this.pageSize, this.searchValue)
      .subscribe((data) => {
        this.courses = [
          ...data,
        ];
      });
  }

  loadMore() {
    this.pageNumber++;
    this.getCoursesList();
  }
}
