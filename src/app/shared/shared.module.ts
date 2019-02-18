import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDurationPipe } from './pipes/course-duration.pipe';

@NgModule({
  declarations: [
    CourseDurationPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseDurationPipe,
  ],
})
export class SharedModule { }
