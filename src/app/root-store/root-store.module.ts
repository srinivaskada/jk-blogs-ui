import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BlogsStoreModule } from './blogs-store';
import { BlogsService } from '../services/blogs.service';
import { BlogDetailsStoreModule } from './blog-details-store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BlogsStoreModule,
    BlogDetailsStoreModule,
  ],
  providers: [BlogsService]
})
export class RootStoreModule { }
