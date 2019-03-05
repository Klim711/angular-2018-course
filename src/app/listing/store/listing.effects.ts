import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ListingActionsUnion, ListingActionsTypes, SetCourses, GetCourses, DeleteCourse } from './listing.actions';
import { CoursesService } from '../services/courses.service';
import { State } from './listing.reducers';

@Injectable()
export class ListingEffects {
 
  @Effect()
  getCourses$ = this.actions$.pipe(
    ofType(ListingActionsTypes.GetCourses),
    withLatestFrom(this.store),
    mergeMap(([action, state]) => {
      const listing: State = state.listing;

      return this.coursesService.getCoursesList(
        listing.pageNumber,
        listing.pageSize,
        listing.search
      ).pipe(
        map((courses) => new SetCourses({courses}))
      )
    })
  );

  @Effect()
  loadMore$ = this.actions$.pipe(
    ofType(ListingActionsTypes.LoadMore),
    map(() => new GetCourses())
  );

  @Effect()
  deleteCourse$ = this.actions$.pipe(
    ofType(ListingActionsTypes.DeleteCourse),
    map((action: DeleteCourse) => action.payload.id),
    mergeMap((id) => {
      return this.coursesService.deleteCourse(id).pipe(
        map(() => new GetCourses())
      )
    })
  );
 
  constructor(
    private actions$: Actions<ListingActionsUnion>,
    private coursesService: CoursesService,
    private store: Store<any>
  ) {}
}
