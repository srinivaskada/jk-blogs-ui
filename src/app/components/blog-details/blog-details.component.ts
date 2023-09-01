import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetails implements OnInit {
  public id: number | null = null
  title = 'Blog details';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramsMap => {
      this.id = +(paramsMap.get('id') ?? 0)
      // TO emit action
      console.log('id', this.id)
    })
  }
}
