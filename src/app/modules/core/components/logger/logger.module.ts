import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoggerService } from './service/logger.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSnackBarModule],
  providers: [LoggerService],
})
export class LoggerModule {}
