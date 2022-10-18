import { Component, OnInit } from '@angular/core';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  toggle = false;

  constructor() {}

  ngOnInit(): void {}

  getButtonGroupConfig(): ButtonGroupConfig[] {
    const configList: ButtonGroupConfig[] = [];
    configList.push(new ButtonGroupConfig('warn', 'Anuluj', 'closeModal'));
    configList.push(
      new ButtonGroupConfig('accent', 'Cofnij', 'scrollToPreviousPage')
    );
    configList.push(
      new ButtonGroupConfig('primary', 'Dalej', 'scrollToNextPage')
    );
    configList.push(new ButtonGroupConfig('green', 'Zapisz', 'save'));

    return configList;
  }
}
