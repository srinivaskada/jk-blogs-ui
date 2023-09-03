import { CommonRequestState } from "src/app/types";
import { State } from "./state";
import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";

export const getError = (state: State): any => state.error

export const getIsLoading = (state: State) => state.requestState === CommonRequestState.LOADING

export const getBlogDetailsItem = (state: State) => state.item

export const selectBlogDetailsFeatureState: MemoizedSelector<object, State> = createFeatureSelector<State>('blog-details')

export const selectBlogDetailsItem = createSelector(selectBlogDetailsFeatureState, getBlogDetailsItem)

export const selectBlogDetailsError = createSelector(selectBlogDetailsFeatureState, getError)

export const selectBlogDetailsIsLoading = createSelector(selectBlogDetailsFeatureState, getIsLoading)