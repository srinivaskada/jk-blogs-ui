import { Injectable } from "@angular/core";
import { Actions, act, createEffect, ofType } from '@ngrx/effects'
import * as authActions from './actions'
import { map, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthStoreEffects {
  constructor(private authService: AuthService, private router: Router, private actions$: Actions) {
  }

  blogsEffect$ = createEffect(() => this.actions$.pipe(
    ofType<authActions.LogoutAction>(
      authActions.ActionTypes.LOGOUT
    ),
    tap(() => {
      this.authService.logout()
      this.router.navigate(['auth'])
    })
  ), {
    dispatch: false
  })
}