import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayout } from 'src/app/layouts/public-layout/public-layout.comopnent';
import { CaptureTokenPage } from 'src/app/pages/capture-token/capture-token.component';
import { LoginPage } from 'src/app/pages/login-page/login-page.component';

const routes: Routes = [{
  path: '',
  component: PublicLayout,
  children: [
    {
      path: 'capture-token/:token',
      component: CaptureTokenPage
    },
    {
      path: '',
      pathMatch: 'full',
      component: LoginPage
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
