import { CommonRequestState } from "src/app/types";
import { State, blogsAdapter } from "./state";
import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel } from "src/app/shared/models/blog.model";

export const getError = (state: State): any => state.error

export const getIsLoading = (state: State) => state.requestState === CommonRequestState.LOADING

export const getTotalBlogItems = (state: State) => {
  return state.total || 0
}

export const selectBlogsFeatureState: MemoizedSelector<object, State> = createFeatureSelector<State>('blogs')

export const selectAllBlogsItems = blogsAdapter.getSelectors(selectBlogsFeatureState).selectAll

export const selectTotalBlogItems = createSelector(selectBlogsFeatureState, getTotalBlogItems)

export const selectBlogById = (id: BlogModel['id']) =>
  createSelector(selectAllBlogsItems, (blogs => blogs?.find(blog => id === blog.id)))

export const selectBlogsError = createSelector(selectBlogsFeatureState, getError)

export const selectBlogsIsLoading = createSelector(selectBlogsFeatureState, getIsLoading)