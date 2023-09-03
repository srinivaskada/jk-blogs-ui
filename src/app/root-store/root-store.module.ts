import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BlogsStoreModule } from './blogs-store';
import { BlogDetailsStoreModule } from './blog-details-store';

import { BlogsService } from '../services/blogs.service';
import { AuthStoreModule } from './auth-store/auth-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AuthStoreModule,
    BlogsStoreModule,
    BlogDetailsStoreModule,
  ],
  providers: [BlogsService]
})
export class RootStoreModule { }
