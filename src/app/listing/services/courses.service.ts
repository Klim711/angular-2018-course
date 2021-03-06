import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../../shared/interfaces/course.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const COURSES_SOURCE = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public coursesListUpdated:EventEmitter<any> = new EventEmitter();
  public searchValueUpdated:EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

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

  public getCourseItem(id: number): Observable<Course> {
    return this.http.get<Course>(`${COURSES_SOURCE}/${id}`);
  }

  public editCourseItem(id: number, content: Object): Observable<any> {
    return this.http.put(`${COURSES_SOURCE}/${id}`, content);
  }

  public createCourseItem(content: Object): Observable<any> {
    return this.http.post(`${COURSES_SOURCE}`, content);
  }

  public deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${COURSES_SOURCE}/${id}`);
  }
}
