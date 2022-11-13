import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';

@Component({
  selector: 'app-facility-form-dialog',
  templateUrl: './facility-form-dialog.component.html',
  styleUrls: ['./facility-form-dialog.component.scss'],
})
export class FacilityFormDialogComponent implements OnInit {
  configureButtonDisability = new BehaviorSubject(false);

  baseFacilityConfig = this.formBuilder.group({
    name: new FormControl(''),
    type: new FormControl(),
  });

  buttonGroupConfig: ButtonGroupConfig[] = [
    new ButtonGroupConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonGroupConfig(
      'accent',
      'Dodaj',
      () => this.save(),
      this.configureButtonDisability
    ),
  ];

  constructor(
    private ownReferences: MatDialogRef<FacilityFormDialogComponent>,
    private formBuilder: FormBuilder,
    private confirmLostDataDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openLoseDataDialog() {
    const dialogRef = this.confirmLostDataDialog.open(
      LostDataConfirmDialogComponent,
      {
        width: '400px',
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        if (result == ConfirmDialogStatus.CONFIRM) {
          this.ownReferences.close();
        }
      }
    });
  }

  save() {
    this.ownReferences.close(this.baseFacilityConfig.value);
  }
}
