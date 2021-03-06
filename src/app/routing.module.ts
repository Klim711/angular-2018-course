import { NotFoundComponent } from './core/not-found/not-found.component';
import { ListingPageComponent } from './listing/listing-page/listing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { CoursePageComponent } from './course/course-page/course-page.component';
import { AuthGuard } from './core/services/auth.guard';

const ROUTES: Routes = [
  { path: 'listing', component: ListingPageComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'course/:id', component: CoursePageComponent, canActivate:[AuthGuard] },
  { path: 'course', component: CoursePageComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(ROUTES)],
})
export class RoutingModule {}
