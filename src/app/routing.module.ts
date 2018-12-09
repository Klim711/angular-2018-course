import { ListingPageComponent } from './listing/listing-page/listing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

const ROUTES: Routes = [
  { path: 'listing', component: ListingPageComponent },
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(ROUTES)],
})
export class RoutingModule {}
