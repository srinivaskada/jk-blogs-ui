import { Component } from '@angular/core';

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
}
