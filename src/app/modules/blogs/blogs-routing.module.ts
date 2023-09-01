import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetails } from 'src/app/components/blog-details/blog-details.component';
import { BlogDashboard } from 'src/app/components/blogs-dashboard/blogs-dashboard.component';
import { MainLayout } from 'src/app/layouts/main-layout/main-layout.component';

const routes: Routes = [{
  path: '',
  component: MainLayout,
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: BlogDashboard
    },
    {
      path: ':id',
      component: BlogDetails
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule { }
