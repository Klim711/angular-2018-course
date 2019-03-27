import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';
import { CoursesService } from 'src/app/listing/services/courses.service';
import {
  CoursePageActionsTypes,
  CoursePageActionsUnion,
  AddCourse,
  AddCourseSuccess,
  EditCourse,
} from './course-page.actions';
import { Router } from '@angular/router';
 
@Injectable()
export class CoursePageEffects {
 
  @Effect()
  addCourse$ = this.actions$.pipe(
    ofType(CoursePageActionsTypes.AddCourse),
    map((action: AddCourse) => action.payload),
    mergeMap((courseContent) =>
      this.coursesService.createCourseItem(courseContent).pipe(
        map(() => new AddCourseSuccess()),
      )
    )
  );

  @Effect({dispatch: false})
  addCourseSuccess$ = this.actions$.pipe(
    ofType(CoursePageActionsTypes.AddCourseSuccess),
    tap(() => this.router.navigate(['/listing']))
  );

  @Effect()
  editCourse$ = this.actions$.pipe(
    ofType(CoursePageActionsTypes.EditCourse),
    map((action: EditCourse) => action.payload),
    mergeMap(({id, content}) =>
      this.coursesService.editCourseItem(id, content).pipe(
        map(() => new AddCourseSuccess()),
      )
    )
  );
 
  constructor(
    private actions$: Actions<CoursePageActionsUnion>,
    private coursesService: CoursesService,
    private router: Router
  ) {}
}
