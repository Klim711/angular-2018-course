import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingBlockComponent } from './loading-block/loading-block.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    UserPanelComponent,
    NotFoundComponent,
    LoadingBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingBlockComponent,
  ],
})
export class CoreModule { }
