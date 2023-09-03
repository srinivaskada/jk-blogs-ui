import { CommonRequestState } from "src/app/types";
import { ActionTypes, Actions } from "./actions";
import { State, initialState } from "./state";

export function authReducer(state = initialState, action: Actions): State {
  switch(action.type) {
    case ActionTypes.LOGOUT:
      return {
        ...state,
        userId: 0,
        requestState: CommonRequestState.INITIAL,
        error: ''
      }
    default:
      return state
  }
}