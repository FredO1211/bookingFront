import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonGroupConfig } from '../../dto/config/button-group-config';
import { ConfirmDialogStatus } from '../../dto/config/confim-dialog-status.enum';

@Component({
  selector: 'lost-data-confirm-dialog',
  templateUrl: './lost-data-confirm-dialog.component.html',
  styleUrls: ['./lost-data-confirm-dialog.component.scss'],
})
export class LostDataConfirmDialogComponent implements OnInit {
  buttonGroupConfig: ButtonGroupConfig[] = [
    new ButtonGroupConfig('warn', 'Zamknij', () => this.confirmExit()),
    new ButtonGroupConfig('accent', 'Anuluj', () => this.cancelExit()),
  ];
  constructor(
    public ownReferences: MatDialogRef<LostDataConfirmDialogComponent>
  ) {}

  ngOnInit(): void {}

  cancelExit() {
    this.ownReferences.close(ConfirmDialogStatus.CANCEL);
  }
  confirmExit() {
    this.ownReferences.close(ConfirmDialogStatus.CONFIRM);
  }
}
