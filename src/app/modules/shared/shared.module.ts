import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './components/button_group/button-group/button-group.component';

@NgModule({
  exports: [ButtonGroupComponent],
  declarations: [ButtonGroupComponent],
  imports: [CommonModule],
})
export class SharedModule {}
