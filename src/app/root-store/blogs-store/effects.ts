import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { BlogsService } from "src/app/services/blogs.service";
import * as blogActions from './actions'
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class BlogsStoreEffects {
  constructor(private blogsService: BlogsService, private actions$: Actions) { }

  blogsEffect$ = createEffect(() => this.actions$.pipe(
    ofType<blogActions.LoadRequestAction>(
      blogActions.ActionTypes.LOAD_REQUEST
    ),
    switchMap(action =>
      this.blogsService
        .getAllBlogs({
          limit: action.payload.limit,
          page: action.payload.page
        })
        .pipe(
          map(blogsPaginationResponse => new blogActions.LoadSuccessAction({
            limit: blogsPaginationResponse.limit,
            page: blogsPaginationResponse.page,
            items: blogsPaginationResponse.data,
            total: blogsPaginationResponse.total
          })),
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