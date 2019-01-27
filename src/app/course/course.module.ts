import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoursePageComponent,
    CourseFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [CoursePageComponent],
})
export class CourseModule { }
