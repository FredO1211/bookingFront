import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  toggle = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

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

  isUserDataFormValid(state: boolean) {}

  save() {}

  scrollToNextPage() {}
  scrollToPreviousPage() {}
  closeModal() {}
}
