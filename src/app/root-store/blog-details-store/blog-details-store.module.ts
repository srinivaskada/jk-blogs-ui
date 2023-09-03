import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { blogsReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { BlogDetailsStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('blog-details', blogsReducer),
    EffectsModule.forFeature([BlogDetailsStoreEffects])
  ],
  providers: [BlogDetailsStoreEffects]
})
export class BlogDetailsStoreModule { }
