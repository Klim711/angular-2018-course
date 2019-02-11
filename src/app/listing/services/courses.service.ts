import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../../shared/interfaces/course.interface';
import { CourseModel } from '../models/course/course-model.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const COURSES_SOURCE = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: Course[] = [];
  public coursesListUpdated:EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  public getCoursesList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${COURSES_SOURCE}`);
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

  public createCourseItem(content: Object) {
    const id = this.coursesList.length;

    const newCourse = new CourseModel({id, ...content});

    this.coursesList = [
      ...this.coursesList,
      newCourse,
    ];
  }

  public deleteCourse(id: number) {
    this.coursesList = this.coursesList.filter((item) => item.id !== id);

    this.coursesListUpdated.emit();
  }
}
