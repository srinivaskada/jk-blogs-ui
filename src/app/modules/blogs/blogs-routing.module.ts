import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetails } from 'src/app/components/blog-details/blog-details.component';
import { BlogDashboard } from 'src/app/components/blogs-dashboard/blogs-dashboard.component';
import { MainLayout } from 'src/app/layouts/main-layout/main-layout.component';
import { featureAuthGuardFactory } from '../auth/feature-auth-gaurd.factory';

const routes: Routes = [{
  path: '',
  component: MainLayout,
  data: {
    breadcrumb: 'Blogs'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: BlogDashboard,
      canActivate: [featureAuthGuardFactory('blogs', '/auth')]
    },
    {
      path: ':id',
      component: BlogDetails,
      data: {
        breadcrumb: (id: any) => {
          return `Blog ${id}`
         }
      },
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule { }
