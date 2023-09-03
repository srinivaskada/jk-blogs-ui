import { BlogModel } from "src/app/shared/models/blog.model";
import { CommonRequestState } from "src/app/types";

export interface State {
  requestState?: CommonRequestState,
  userId?: BlogModel['id'],
  error?: string
}

export const initialState: State = {
  requestState: CommonRequestState.INITIAL,
  userId: 0,
  error: ''
}