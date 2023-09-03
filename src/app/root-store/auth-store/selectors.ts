import { CommonRequestState } from "src/app/types";
import { State } from "./state";
import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";

export const getError = (state: State): any => state.error

export const getIsLoading = (state: State) => state.requestState === CommonRequestState.LOADING

export const selectAuthFeatureState: MemoizedSelector<object, State> = createFeatureSelector<State>('blog-details')

export const selectBlogDetailsError = createSelector(selectAuthFeatureState, getError)

export const selectBlogDetailsIsLoading = createSelector(selectAuthFeatureState, getIsLoading)