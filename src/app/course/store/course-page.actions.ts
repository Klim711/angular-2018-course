import { Action } from '@ngrx/store';
import { Course } from 'src/app/shared/interfaces/course.interface';

export enum CoursePageActionsTypes {
  AddCourse = '[Course Form] AddCourse',
  AddCourseSuccess = '[Course Form] AddCourseSuccess',
  EditCourse = '[Course Form] EditCourse',
}

export class AddCourse implements Action {
  readonly type = CoursePageActionsTypes.AddCourse;

  constructor(public payload: Course) {}
}

export class AddCourseSuccess implements Action {
  readonly type = CoursePageActionsTypes.AddCourseSuccess;
}

export class EditCourse implements Action {
  readonly type = CoursePageActionsTypes.EditCourse;

  constructor(public payload: {id: number, content: Object}) {}
}

export type CoursePageActionsUnion =
  | AddCourse
  | EditCourse
  | AddCourseSuccess;
