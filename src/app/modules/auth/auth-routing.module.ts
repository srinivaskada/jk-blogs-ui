import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayout } from 'src/app/layouts/public-layout/public-layout.comopnent';
import { LoginPage } from 'src/app/pages/login-page/login-page.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: PublicLayout,
  children: [{
    path: '',
    pathMatch: 'full',
    component: LoginPage
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
