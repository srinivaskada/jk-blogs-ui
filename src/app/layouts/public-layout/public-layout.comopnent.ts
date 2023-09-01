import { Component } from '@angular/core';

@Component({
  selector: 'public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss'],
  host: {
    class: 'is-flex is-flex-direction-column is-block h-100'
  }
})
export class PublicLayout {
  title = 'jk-blog-ui';
}
