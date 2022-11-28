import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page/main-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MainSidenavComponent } from './components/main-sidenav/main-sidenav.component';
import { MainRoutingModule } from './main-routing.module';
import { AboutModule } from './about/about.module';

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
