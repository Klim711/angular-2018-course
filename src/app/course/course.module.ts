import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [CoursePageComponent, CourseFormComponent],
  imports: [
    CommonModule,
  ],
  exports: [CoursePageComponent],
})
export class CourseModule { }
