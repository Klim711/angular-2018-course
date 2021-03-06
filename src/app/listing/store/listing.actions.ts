import { Action } from '@ngrx/store';
import { Course } from 'src/app/shared/interfaces/course.interface';

export enum ListingActionsTypes {
  GetCourses = '[Listing Page] GetCourses',
  SetCourses = '[Listing Page] SetCourses',
  LoadMore = '[Listing Page] LoadMore',
  DeleteCourse = '[Listing Page] DeleteCourse',
  SetSearchValue = '[Listing Page] SetSearchValue',
}

export class GetCourses implements Action {
  readonly type = ListingActionsTypes.GetCourses;

  // constructor(public payload: {pageNumber: number}) {}
}

export class SetCourses implements Action {
  readonly type = ListingActionsTypes.SetCourses;

  constructor(public payload: {
    courses: Course[],
  }) {}
}

export class LoadMore implements Action {
  readonly type = ListingActionsTypes.LoadMore;
}

export class DeleteCourse implements Action {
  readonly type = ListingActionsTypes.DeleteCourse;

  constructor(public payload: {
    id: number,
  }) {}
}

export class SetSearchValue implements Action {
  readonly type = ListingActionsTypes.SetSearchValue;

  constructor(public payload: {
    value: string,
  }) {}
}

export type ListingActionsUnion =
  | GetCourses
  | SetCourses
  | SetSearchValue
  | LoadMore;
