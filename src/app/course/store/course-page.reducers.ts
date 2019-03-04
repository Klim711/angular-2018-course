import { Action } from '@ngrx/store';

export interface State {
  coursePage: Object ;
}

export const initialState: State = {
  coursePage: {},
};

export function coursePageReducer(state:State = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
