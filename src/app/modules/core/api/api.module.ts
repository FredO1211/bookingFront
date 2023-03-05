import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserApi } from './user/user-api';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [UserApi],
})
export class ApiModule {}
