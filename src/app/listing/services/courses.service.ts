import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../course.interface';
import { CourseModel } from '../course-model.class';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: Course[] = [
    new CourseModel({
      id: 1,
      title: 'a',
      create_date: new Date('12/20/2018'),
      duration: 123,
      description: 'AAA',
      rating: 9,
    }),
    new CourseModel({
      id: 2,
      title: 'b',
      create_date: new Date('1/1/2019'),
      duration: 33,
      description: 'BBB',
      rating: 7,
    }),
    new CourseModel({
      id: 3,
      title: 'c',
      create_date: new Date('1/1/2020'),
      duration: 120,
      description: 'CCC',
      rating: 4,
    }),
    new CourseModel({
      id: 4,
      title: 'D',
      create_date: new Date('1/1/2011'),
      duration: 25,
      description: 'DDD',
      rating: null,
    }),
    new CourseModel({
      id: 5,
      title: 'E',
      create_date: new Date('1/1/2011'),
      duration: 123,
      description: 'EEE',
      rating: 60,
    }),
    new CourseModel({
      id: 6,
      title: 'F',
      create_date: new Date('1/1/2011'),
      duration: 59,
      description: 'FFF',
      rating: 6,
    }),
  ];
  public coursesListUpdated:EventEmitter<any> = new EventEmitter();
  constructor() { }

  public getCoursesList(): Course[] {
    return this.coursesList;
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
