import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { BlogsService } from "src/app/services/blogs.service";
import * as blogActions from './actions'
import { catchError, map, of, switchMap, tap } from "rxjs";

@Injectable()
export class BlogDetailsStoreEffects {
  constructor(private blogsService: BlogsService, private actions$: Actions) {
  }

  blogsEffect$ = createEffect(() => this.actions$.pipe(
    ofType<blogActions.LoadRequestAction>(
      blogActions.ActionTypes.LOAD_REQUEST
    ),
    switchMap(action =>
      this.blogsService
        .getBlogDetails(action.payload)
        .pipe(
          map(blogDetailsResponse => new blogActions.LoadSuccessAction(blogDetailsResponse.data)),
          catchError(error =>
            of(new blogActions.LoadFailAction({
              error: error.message
            }))
          )
        )
    )
  )
  )
}