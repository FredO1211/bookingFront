import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { FacilityFormDialogComponent } from '../../dialog/facility-form-dialog/facility-form-dialog.component';

@Component({
  selector: 'facility-config-form',
  templateUrl: './facility-config-form.component.html',
  styleUrls: ['./facility-config-form.component.scss'],
})
export class FacilityConfigFormComponent implements OnInit {
  facilities: any[] = [];
  displayedColumns: string[] = ['position'];
  buttonConfigGroup: ButtonGroupConfig[] = [
    new ButtonGroupConfig('palette.success.light', '+ Dodaj obiekt', () =>
      this.openAddFacilityFormDialog()
    ),
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  executeButtonGroup(eventName: string) {
    if (eventName == 'openAddFacilityFormDialog') {
      this.openAddFacilityFormDialog();
    }
  }

  openAddFacilityFormDialog() {
    const dialogRef = this.dialog.open(FacilityFormDialogComponent);
  }

  openDialog() {}
}
