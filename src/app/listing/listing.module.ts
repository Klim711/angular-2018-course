import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CoursesToolbarComponent } from './courses-toolbar/courses-toolbar.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseClassPipe } from './pipes/course-class.pipe';
import { NoCoursesComponent } from './no-courses/no-courses.component';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListingPageComponent,
    CoursesToolbarComponent,
    CoursesListItemComponent,
    SearchComponent,
    AddCourseComponent,
    CourseClassPipe,
    NoCoursesComponent,
    SortByDatePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ListingPageComponent,
  ],
})
export class ListingModule { }
