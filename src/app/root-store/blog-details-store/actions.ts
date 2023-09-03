import { Action } from '@ngrx/store'
import { BlogModel } from 'src/app/shared/models/blog.model'

export enum ActionTypes {
  LOAD_REQUEST = '[blog details] Load Request',
  LOAD_SUCCESS = '[blog details] Load Success',
  LOAD_FAIL = '[blog details] Load Fail'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST
  constructor(public payload: BlogModel['id']) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS
  constructor(public payload: BlogModel) {}
}

export class LoadFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL
  constructor(public payload: { error: string }) {}
}

export type Actions = LoadRequestAction | LoadSuccessAction | LoadFailAction