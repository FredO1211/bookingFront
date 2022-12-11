import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';
import { ConfigGeneratorService } from '../../service/config-generator.service';

@Component({
  selector: 'app-facility-form-dialog',
  templateUrl: './facility-form-dialog.component.html',
  styleUrls: ['./facility-form-dialog.component.scss'],
})
export class FacilityFormDialogComponent implements OnInit {
  facilityFormConfig: FacilityFormConfig;
  baseFacilityConfig = this.formBuilder.group({
    name: new FormControl(''),
    type: new FormControl(),
  });

  buttonGroupConfig: ButtonConfig[] = [
    new ButtonConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonConfig('success', '+ Dodaj', () => this.save()),
  ];

  constructor(
    private configGeneratorService: ConfigGeneratorService,
    private ownReferences: MatDialogRef<FacilityFormDialogComponent>,
    private formBuilder: FormBuilder,
    private confirmLostDataDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.facilityFormConfig =
      this.configGeneratorService.getDefaultFacilityFormConfig();
  }

  private openLoseDataDialog() {
    const dialogRef = this.confirmLostDataDialog.open(
      LostDataConfirmDialogComponent,
      {
        width: '400px',
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        if (result == ConfirmDialogStatus.CONFIRM) {
          this.close();
        }
      }
    });
  }

  save() {
    this.close(this.baseFacilityConfig.value);
  }

  close(dialogResult?: any) {
    this.ownReferences.close(dialogResult);
  }
}
