import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonConfig } from '../../dto/config/button-group-config';
import { ConfirmDialogStatus } from '../../dto/config/confim-dialog-status.enum';
import { ConfirmDialogConfig } from '../../dto/config/confirm-dialog-config';

@Component({
  selector: 'lost-data-confirm-dialog',
  templateUrl: './lost-data-confirm-dialog.component.html',
  styleUrls: ['./lost-data-confirm-dialog.component.scss'],
})
export class LostDataConfirmDialogComponent implements OnInit {
  buttonGroupConfig: ButtonConfig[] = [
    new ButtonConfig('warn', 'Zamknij', () => this.confirmExit()),
    new ButtonConfig('accent', 'Anuluj', () => this.cancelExit()),
  ];
  content: string =
    'Zamknięcie spowoduje utratę zmian. Czy chcesz kontynuować?';
  header: string = 'Masz niezapisane zmiany';

  constructor(
    public ownReferences: MatDialogRef<LostDataConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.buttonGroupConfig = this.data.confirmButtonConfig;
      this.header = this.data.header;
      this.content = this.data.content;
    }
  }

  cancelExit() {
    this.ownReferences.close(ConfirmDialogStatus.CANCEL);
  }
  confirmExit() {
    this.ownReferences.close(ConfirmDialogStatus.CONFIRM);
  }
}
