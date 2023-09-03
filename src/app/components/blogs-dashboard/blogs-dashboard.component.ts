import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, Subscription, of, tap } from 'rxjs';
import { BlogsStoreActions, BlogsStoreSelectors, RootStoreState } from 'src/app/root-store';
import { BlogModel } from 'src/app/shared/models/blog.model';

@Component({
  selector: 'blogs--dashboard',
  templateUrl: './blogs-dashboard.component.html',
  styleUrls: ['./blogs-dashboard.component.scss']
})
export class BlogDashboard implements OnInit, OnDestroy {
  title = 'Blogs dashboard';
  pageTotal = 0
  pageSize = 20;
  pageIndex = 1;

  blogItems$: Observable<BlogModel[]> = of()
  error$: Observable<string> = of('');
  isLoading$: Observable<boolean> = of(false);
  totalBlogItems$: Observable<number> = of(0)
  totalBlogItemsSubscription: Subscription | null = null

  constructor(private store$: Store<RootStoreState.State>) {}

  handleBlogsPaginationEvent(e: PageEvent) {
    this.pageTotal = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.store$.dispatch(
      new BlogsStoreActions.LoadRequestAction({
        limit: this.pageSize,
        page: this.pageIndex + 1
      })
    )
  }

  ngOnInit() {
    this.store$.pipe(tap(d => {
      console.log('store$', d)
    }))
    this.blogItems$ = this.store$.select(
      BlogsStoreSelectors.selectAllBlogsItems
    );

    this.totalBlogItems$ = this.store$.select(
      BlogsStoreSelectors.selectTotalBlogItems
    )

    this.error$ = this.store$.select(
      BlogsStoreSelectors.selectBlogsError
    );

    this.isLoading$ = this.store$.select(
      BlogsStoreSelectors.selectBlogsIsLoading
    );

    this.store$.dispatch(
      new BlogsStoreActions.LoadRequestAction({
        limit: this.pageSize,
        page: this.pageIndex
      })
    )
  }

  ngOnDestroy(): void {
    if(this.totalBlogItemsSubscription) {
      this.totalBlogItemsSubscription.unsubscribe()
    }
  }
}
