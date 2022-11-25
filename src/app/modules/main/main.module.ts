import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page/main-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainPageComponent],
  imports: [MatSidenavModule, CommonModule, MatButtonModule],
})
export class MainModule {}
