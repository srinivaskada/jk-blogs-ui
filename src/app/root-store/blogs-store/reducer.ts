import { CommonRequestState } from "src/app/types";
import { ActionTypes, Actions } from "./actions";
import { State, blogsAdapter, initialState } from "./state";

export function blogsReducer(state = initialState, action: Actions): State {
  console.log(state, action)
  switch(action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        requestState: CommonRequestState.LOADING,
        limit: action.payload.limit,
        page: action.payload.page,
        error: ''
      }
    case ActionTypes.LOAD_SUCCESS:
      return blogsAdapter.setAll(action.payload.items, {
        ...state,
        requestState: CommonRequestState.SUCCESS,
        limit: action.payload.limit,
        page: action.payload.limit,
        total: action.payload.total
      })
    case ActionTypes.LOAD_FAIL:
      return {
        ...state,
        requestState: CommonRequestState.FAILED,
      }
    default:
      return state
  }
}