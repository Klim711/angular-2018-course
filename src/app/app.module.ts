import { ListingModule } from './listing/listing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginModule } from './login/login.module';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ListingModule,
    RoutingModule,
    LoginModule,
    CourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
