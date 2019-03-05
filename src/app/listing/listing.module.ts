import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ListingPageComponent } from './listing-page/listing-page.component';
import { CoursesToolbarComponent } from './courses-toolbar/courses-toolbar.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseClassPipe } from './pipes/course-class.pipe';
import { NoCoursesComponent } from './no-courses/no-courses.component';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SharedModule } from '../shared/shared.module';
import { listingReducer } from './store/listing.reducers';
import { ListingEffects } from './store/listing.effects';

@NgModule({
  declarations: [
    ListingPageComponent,
    CoursesToolbarComponent,
    CoursesListItemComponent,
    SearchComponent,
    AddCourseComponent,
    CourseClassPipe,
    NoCoursesComponent,
    SortByDatePipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('listing', listingReducer),
    EffectsModule.forFeature([ListingEffects]),
  ],
  exports: [
    ListingPageComponent,
  ],
})
export class ListingModule { }
