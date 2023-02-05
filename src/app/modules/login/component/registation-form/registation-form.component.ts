import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggerModule } from 'src/app/modules/core/components/logger/logger.module';
import { LoggerService } from 'src/app/modules/core/components/logger/service/logger.service';
import { RegistrationFormModel } from './dto/form-model';
import { RegistrationDto } from './io/register-form-data';

@Component({
  selector: 'registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.scss'],
})
export class RegistationFormComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output('registerUser') submitFormEvent: EventEmitter<RegistrationDto> =
    new EventEmitter();
  password = '';

  registrationFormModel: RegistrationFormModel;

  constructor() {}

  ngOnInit(): void {
    this.initEmptyForm();
  }

  toggleForm() {
    this.toggle.emit();
  }

  submitForm() {
    this.submitFormEvent.emit(this.registrationFormModel as RegistrationDto);
  }

  private initEmptyForm() {
    this.registrationFormModel = {
      email: '',
      password: '',
      rePassword: '',
    };
  }
}
