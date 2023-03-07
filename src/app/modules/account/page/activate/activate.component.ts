import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { DataService } from './services/data.service';
import { FormGroupHolder } from './services/form-group-holder.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
  providers: [FormGroupHolder, DataService],
})
export class ActivateComponent implements OnInit {
  toggle = false;

  public userDataFormGroup: FormGroup;

  constructor(
    public dialog: MatDialog,
    private formHolder: FormGroupHolder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.userDataFormGroup = this.formHolder.getUserDataFormGroup();
  }

  getButtonGroupConfig(): ButtonConfig[] {
    const configList: ButtonConfig[] = [];
    configList.push(
      new ButtonConfig('accent', 'Cofnij', () => this.scrollToPreviousPage())
    );
    configList.push(
      new ButtonConfig('primary', 'Dalej', () => this.scrollToNextPage())
    );
    configList.push(new ButtonConfig('success', 'Zapisz', () => this.save()));

    return configList;
  }

  activate() {
    this.dataService.activateAccount();
  }

  isUserDataFormValid(state: boolean) {}

  save() {}

  scrollToNextPage() {}
  scrollToPreviousPage() {}
  closeModal() {}
}
