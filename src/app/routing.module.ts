import { NotFoundComponent } from './core/not-found/not-found.component';
import { ListingPageComponent } from './listing/listing-page/listing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';

const ROUTES: Routes = [
  { path: 'listing', component: ListingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(ROUTES)],
})
export class RoutingModule {}
