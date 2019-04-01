import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CourseDurationPipe,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CourseDurationPipe,
    BreadcrumbsComponent,
  ],
})
export class SharedModule { }
