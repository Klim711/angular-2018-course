import { Action } from '@ngrx/store';

export interface State {
}

export const initialState: State = {
};

export function coursePageReducer(state:State = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
