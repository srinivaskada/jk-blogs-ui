import { Action } from '@ngrx/store'

export enum ActionTypes {
  LOGOUT = '[auth] Logout',
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT
}

export type Actions = LogoutAction