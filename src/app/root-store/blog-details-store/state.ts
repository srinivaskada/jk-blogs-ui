import { BlogModel } from "src/app/shared/models/blog.model";
import { CommonRequestState } from "src/app/types";

export interface State {
  requestState?: CommonRequestState
  item?: BlogModel
  error?: string
}

export const initialState: State = {
  requestState: CommonRequestState.INITIAL,
  error: ''
}