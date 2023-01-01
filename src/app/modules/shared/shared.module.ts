import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './components/button_group/button-group/button-group.component';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from '../core/core.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LostDataConfirmDialogComponent } from './dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ScrollEndDetectDirective } from './directives/scroll-end-detect.directive';
import { CurrencyInputFormatDirective } from './directives/currency-input-format.directive';
import { MonthToStringConversionPipe } from './pipes/month-to-string-conversion.pipe';
import { DayToStringConversionPipe } from './pipes/day-to-string-conversion.pipe';

@NgModule({
  exports: [
    ButtonGroupComponent,
    LostDataConfirmDialogComponent,
    ScrollEndDetectDirective,
    CurrencyInputFormatDirective,
    MonthToStringConversionPipe,
    DayToStringConversionPipe,
  ],
  declarations: [
    ButtonGroupComponent,
    LostDataConfirmDialogComponent,
    ScrollEndDetectDirective,
    CurrencyInputFormatDirective,
    MonthToStringConversionPipe,
    DayToStringConversionPipe,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CoreModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class SharedModule {}
