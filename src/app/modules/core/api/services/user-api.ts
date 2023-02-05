import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment-dev';
import { NewUserDTO } from '../model/user/new-user-dto';

@Injectable()
export class UserApi {
  private BASE_URL = environment.baseApiUrl + 'user';

  constructor(private httpClient: HttpClient) {}

  register(newUser: NewUserDTO): Observable<any> {
    const url = this.BASE_URL + '/register';
    return this.httpClient.post(url, newUser);
  }
}
