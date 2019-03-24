import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { coursePageReducer } from './store/course-page.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CoursePageEffects } from './store/course-page.effects';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseLengthComponent } from './course-length/course-length.component';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';

@NgModule({
  declarations: [
    CoursePageComponent,
    CourseFormComponent,
    CourseDateComponent,
    CourseLengthComponent,
    CourseAuthorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('coursePage', coursePageReducer),
    EffectsModule.forFeature([CoursePageEffects]),
  ],
  exports: [CoursePageComponent],
})
export class CourseModule { }
