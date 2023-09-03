import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import { BlogDetailsStoreActions, BlogDetailsStoreSelectors, RootStoreState } from 'src/app/root-store';
import { BlogModel } from 'src/app/shared/models/blog.model';

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetails implements OnInit {
  id: number | null = null
  blogDetailsItem$: Observable<BlogModel | undefined> = of()
  error$: Observable<string> = of();
  isLoading$: Observable<boolean> = of();
  title = 'Blog details';
  constructor(private route: ActivatedRoute, private store$: Store<RootStoreState.State>) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramsMap => {
      this.id = +(paramsMap.get('id') ?? 0)
      // TO emit action
      console.log('id', this.id)
      this.store$.dispatch(
        new BlogDetailsStoreActions.LoadRequestAction(this.id)
      )
    })
    this.blogDetailsItem$ = this.store$.select(BlogDetailsStoreSelectors.selectBlogDetailsItem)
    this.blogDetailsItem$.pipe(tap(d => {
      console.log('blogDetailsItems$', d)
    }))

    this.error$ = this.store$.select(
      BlogDetailsStoreSelectors.selectBlogDetailsError
    );

    this.isLoading$ = this.store$.select(
      BlogDetailsStoreSelectors.selectBlogDetailsIsLoading
    );
  }
}
