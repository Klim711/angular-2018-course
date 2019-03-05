import { Course } from 'src/app/shared/interfaces/course.interface';
import { ListingActionsUnion, ListingActionsTypes } from './listing.actions';

export interface State {
  courses: Course[];
  search: string;
  pageNumber: number;
  pageSize: number;
}

export const initialState: State = {
  courses: [],
  search: '',
  pageNumber: 1,
  pageSize: 10,
}

export function listingReducer(
  state:State = initialState,
  action: ListingActionsUnion) {
  switch (action.type) {
    case ListingActionsTypes.SetCourses:
      return {
        ...state,
        courses: action.payload.courses,
      };
    case ListingActionsTypes.LoadMore:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    
    default:
      return state;
  }
}
