import { LoginPageActionsTypes, LoginPageActionsUnion } from './login-page.actions';

export interface State {
  returnPage: string | null;
}

export const initialState: State = {
  returnPage: null,
};

export function loginPageReducer(
  state:State = initialState,
  action: LoginPageActionsUnion) {
  switch (action.type) {
    case LoginPageActionsTypes.SetReturnPage:
      return {
        ...state,
        returnPage: action.payload,
      };
    default:
      return state;
  }
}
