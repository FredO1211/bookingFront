import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private snackBarReference: MatSnackBarRef<TextOnlySnackBar>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) {}

  logInfo(message: string) {
    this.openSnackBar(message);
  }

  logWarn(message: string) {
    this.openSnackBar(message);
  }

  logError(message: string) {
    this.openSnackBar(message);
  }

  private openSnackBar(message: string) {
    this.snackBarReference = this.snackBar.open(message, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

    setTimeout(() => {
      this.snackBarReference.dismiss();
    }, 4000);
  }
}
