import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { BearerTokenInterceptor } from './shared/http-interceptors/bearer-token.interceptor';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from "xng-breadcrumb";
import { PublicLayout } from './layouts/public-layout/public-layout.comopnent';
import { MainLayout } from './layouts/main-layout/main-layout.component';
import { AuthService } from './services/auth.service';
import { RootStoreModule } from './root-store';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayout,
    MainLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    RootStoreModule,
    FormsModule,
    BreadcrumbModule,
    ...[
      MatIconModule,
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
    ],
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerTokenInterceptor,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
