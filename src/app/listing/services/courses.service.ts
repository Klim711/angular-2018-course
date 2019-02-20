import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../../shared/interfaces/course.interface';
import { CourseModel } from '../models/course/course-model.class';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const COURSES_SOURCE = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: Course[] = [];
  public coursesListUpdated:EventEmitter<any> = new EventEmitter();
  public searchValueUpdated:EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.initPageNumber();
  }

  private initPageNumber() {
  }

  public getCoursesList(
    pageNumber:number,
    pageSize:number = 10,
    textFragment: string = '',
  ):Observable<Course[]> {
    const start = 0;
    const count = pageNumber * pageSize;
    const params =
      `start=${start}&count=${count}&textFragment=${textFragment}`;
    const sort = `_sort=date&_order=desc`
    return this.http.get<Course[]>(`${COURSES_SOURCE}?${params}&${sort}`);
  }

  public setSearchValue(value) {
    this.searchValueUpdated.emit(value);
  }

  public getCourseItem(id: number): Course {
    return this.coursesList.find((course) => course.id === id);
  }

  public editCourseItem(id: number, content: Object) {
    const courses = this.coursesList;
    const indexOfEditedCourse = courses
      .findIndex((course) => course.id === id);

    const modifiedCourse = Object.assign({},
        courses[indexOfEditedCourse], content);

    this.coursesList = [
      ...courses.slice(0, indexOfEditedCourse),
      modifiedCourse,
      ...courses.slice(indexOfEditedCourse + 1, courses.length),
    ];
  }

  public createCourseItem(content: Object): Observable<any> {
    return this.http.post(`${COURSES_SOURCE}`, content);
  }

  public deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${COURSES_SOURCE}/${id}`);
  }
}
