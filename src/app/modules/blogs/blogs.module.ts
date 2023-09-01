import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogDashboard } from 'src/app/components/blogs-dashboard/blogs-dashboard.component';
import { BlogDetails } from 'src/app/components/blog-details/blog-details.component';


@NgModule({
  declarations: [BlogDashboard, BlogDetails],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
