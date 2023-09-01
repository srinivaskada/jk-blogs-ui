import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { BlogModel } from "src/app/shared/models/blog.model";
import { CommonRequestState } from "src/app/types";

export const blogsAdapter: EntityAdapter<BlogModel> = createEntityAdapter<BlogModel>({
  selectId: entity => entity.id,
  sortComparer: (a: BlogModel, b: BlogModel): number =>
    b.updatedAt.localeCompare(a.updatedAt)
})

export interface State extends EntityState<BlogModel> {
  requestState?: CommonRequestState
  limit?: number
  page?: number
  error?: string
}

export const initialState: State = blogsAdapter.getInitialState({
  page: 1,
  limit: 10,
  requestState: CommonRequestState.INITIAL,
  error: ''
})