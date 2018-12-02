import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { MainComponent } from './main/main.component';
import { CoursesToolbarComponent } from './courses-toolbar/courses-toolbar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    UserPanelComponent,
    ListingPageComponent,
    MainComponent,
    CoursesToolbarComponent,
    CoursesListComponent,
    CoursesListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListingPageComponent,
  ],
})
export class ListingModule { }
