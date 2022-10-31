import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { FacilityDetailsFormDialogComponent } from '../../dialog/facility-details-form-dialog/facility-details-form-dialog.component';
import { FacilityFormDialogComponent } from '../../dialog/facility-form-dialog/facility-form-dialog.component';
import { BaseFacilityConfigDTO } from '../../models/base-facility-config.dto';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  toggle = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  getButtonGroupConfig(): ButtonGroupConfig[] {
    const configList: ButtonGroupConfig[] = [];
    configList.push(
      new ButtonGroupConfig('warn', 'Anuluj', () => this.closeModal())
    );
    configList.push(
      new ButtonGroupConfig('accent', 'Cofnij', () =>
        this.scrollToPreviousPage()
      )
    );
    configList.push(
      new ButtonGroupConfig('primary', 'Dalej', () => this.scrollToNextPage())
    );
    configList.push(
      new ButtonGroupConfig('green', 'Zapisz', () => this.save())
    );

    return configList;
  }

  openyFacilityDetailsFormDialog(baseConfig: BaseFacilityConfigDTO) {
    const dialogRef = this.dialog.open(FacilityDetailsFormDialogComponent, {
      width: '500px',
      data: baseConfig,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  openAddFacilityFormDialog() {
    const dialogRef = this.dialog.open(FacilityFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.openyFacilityDetailsFormDialog(result);
      }
    });
  }

  save() {}

  scrollToNextPage() {}
  scrollToPreviousPage() {}
  closeModal() {}
}
