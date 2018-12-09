import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CoursesToolbarComponent } from './courses-toolbar/courses-toolbar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [
    ListingPageComponent,
    CoursesToolbarComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    SearchComponent,
    AddCourseComponent,
    LoadMoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListingPageComponent,
  ],
})
export class ListingModule { }
