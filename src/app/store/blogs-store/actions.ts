import { Action } from '@ngrx/store'
import { BlogModel } from 'src/app/shared/models/blog.model'
import { PaginatedEntitiesModel } from 'src/app/shared/models/paginated-entities.model'
import { PaginationRequestModel } from 'src/app/shared/models/pagination-request.model'

export enum ActionTypes {
  LOAD_REQUEST = '[blogs] Load Request',
  LOAD_SUCCESS = '[blogs] Load Success',
  LOAD_FAIL = '[blogs] Load Fail'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST
  constructor(public payload: PaginationRequestModel) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS
  constructor(public payload: PaginatedEntitiesModel<BlogModel>) {}
}

export class LoadFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL
  constructor(public payload: { error: string }) {}
}

export type Actions = LoadRequestAction | LoadSuccessAction | LoadFailAction