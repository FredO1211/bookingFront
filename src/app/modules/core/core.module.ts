import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './vendors/material/material.module';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, ApiModule],
  exports: [MaterialModule],
})
export class CoreModule {}
