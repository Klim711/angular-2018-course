import { Course } from '../../shared/interfaces/course.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GetCourses, LoadMore, DeleteCourse } from '../store/listing.actions';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css'],
})
export class ListingPageComponent implements OnInit {
  public courses$: Observable<Course[]>;
  public courses: Course[] = [];
  public pageSize: number = 10;
  public pageNumber: number = 1;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new GetCourses());
    this.courses$ = this.store.pipe(
      select((state) => state.listing.courses)
    );
  }

  deleteCourse(courseId: number) {
    this.store.dispatch(new DeleteCourse({id: courseId}));
  }

  loadMore() {
    this.store.dispatch(new LoadMore());
  }
}
