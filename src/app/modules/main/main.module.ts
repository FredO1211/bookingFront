import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page/main-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MainRoutingModule } from './main-routing.module';
import { AboutModule } from './module/about/about.module';
import { MainSidenavComponent } from './component/main-sidenav/main-sidenav.component';

@NgModule({
  declarations: [MainPageComponent, MainSidenavComponent],
  imports: [
    MatSidenavModule,
    CommonModule,
    MatButtonModule,
    MainRoutingModule,
    AboutModule,
  ],
})
export class MainModule {}
