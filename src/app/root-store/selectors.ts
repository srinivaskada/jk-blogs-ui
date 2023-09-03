import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  BlogsStoreSelectors
} from './blogs-store';
import { BlogDetailsStoreSelectors } from './blog-details-store'

export const selectError: MemoizedSelector<object, string> = createSelector(
  BlogsStoreSelectors.selectBlogsError,
  BlogDetailsStoreSelectors.selectBlogDetailsError,
  (blogsError: string, blogDetailsError: string) => {
    return blogsError || blogDetailsError
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  BlogsStoreSelectors.selectBlogsIsLoading,
  BlogDetailsStoreSelectors.selectBlogDetailsIsLoading,
  (blogsIsLoading: boolean, blogDetailsIsLoading) => {
    return blogsIsLoading || blogDetailsIsLoading;
  }
);