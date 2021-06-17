import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public host = environment.apiUrl;
  constructor(private http: HttpClient) {}

  login(credentials: Credentials) {
    return this.http.post('http://localhost:8080/login', credentials);
  }

  logOut() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

export class Credentials {
  constructor(username: string, password: string) {}
}
