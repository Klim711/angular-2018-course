import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CoursesToolbarComponent } from './courses-toolbar/courses-toolbar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    ListingPageComponent,
    CoursesToolbarComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    SearchComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListingPageComponent,
  ],
})
export class ListingModule { }
