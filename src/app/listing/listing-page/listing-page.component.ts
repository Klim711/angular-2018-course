import { CoursesListItem } from './../courses-list-item.model';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  public courses: CoursesListItem[] = [];
  public searchValue: string = '';

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.coursesListUpdated.subscribe(() => {
      this.courses = this.coursesService.getCoursesList();
    })
    this.courses = this.coursesService.getCoursesList();
  }

}
