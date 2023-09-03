import { CommonRequestState } from "src/app/types";
import { ActionTypes, Actions } from "./actions";
import { State, initialState } from "./state";

export function blogsReducer(state = initialState, action: Actions): State {
  console.log(state, action)
  switch(action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        requestState: CommonRequestState.LOADING,
        error: ''
      }
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        item: action.payload,
        requestState: CommonRequestState.SUCCESS,
        error: ''
      }
    case ActionTypes.LOAD_FAIL:
      return {
        ...state,
        requestState: CommonRequestState.FAILED,
        error: action.payload.error
      }
    default:
      return state
  }
}