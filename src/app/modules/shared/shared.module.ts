import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './components/button_group/button-group/button-group.component';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from '../core/core.module';

@NgModule({
  exports: [ButtonGroupComponent],
  declarations: [ButtonGroupComponent],
  imports: [CommonModule, MatButtonModule, CoreModule],
})
export class SharedModule {}
