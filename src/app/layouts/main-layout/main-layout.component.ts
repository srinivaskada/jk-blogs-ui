import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthStoreActions, RootStoreState } from 'src/app/root-store';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  host: {
    class: 'is-flex is-flex-direction-column is-block h-100'
  }
})
export class MainLayout {
  title = 'jk-blog-ui';
  constructor(private store$: Store<RootStoreState.State>) {}

  logout() {
    alert('Logout')
    this.store$.dispatch(new AuthStoreActions.LogoutAction())
  }
}
