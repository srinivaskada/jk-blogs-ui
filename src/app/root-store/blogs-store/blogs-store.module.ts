import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { blogsReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { BlogsStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('blogs', blogsReducer),
    EffectsModule.forFeature([BlogsStoreEffects])
  ],
  providers: [BlogsStoreEffects]
})
export class BlogsStoreModule { }
