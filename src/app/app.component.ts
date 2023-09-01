import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'is-block h-100'
  }
})
export class AppComponent {
  title = 'jk-blog-ui';
}
