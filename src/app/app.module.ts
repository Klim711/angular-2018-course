import { ListingModule } from './listing/listing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
