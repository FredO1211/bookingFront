import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountConfigurationDTO } from 'src/app/modules/account/page/activate/dto/account-configuration.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivateApi {
  private BASE_URL = `${environment.backend_host}/account`;
  constructor(private httpClient: HttpClient) {}

  activateAccount(
    accountConfiguration: AccountConfigurationDTO,
    token: string
  ) {
    const api_url = `${this.BASE_URL}/activate`;
    const params = new HttpParams().append('token', token);

    return this.httpClient.put(api_url, accountConfiguration, {
      params: params,
    });
  }
}
