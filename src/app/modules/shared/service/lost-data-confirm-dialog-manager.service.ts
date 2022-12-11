import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LostDataConfirmDialogComponent } from '../dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ConfirmDialogConfig } from '../dto/config/confirm-dialog-config';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogManager {
  private dialogRef: MatDialogRef<LostDataConfirmDialogComponent>;
  constructor(private dialog: MatDialog) {}

  public open(_config: ConfirmDialogConfig, executeResult?: Function) {
    this.dialogRef = this.dialog.open(LostDataConfirmDialogComponent, {
      data: _config,
      width: '400px',
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      if (result != null && executeResult) {
        executeResult(result);
      }
    });
  }

  close() {
    this.dialogRef.close();
  }
}
