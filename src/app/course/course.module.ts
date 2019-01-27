import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [CoursePageComponent, CourseFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CoursePageComponent],
})
export class CourseModule { }
