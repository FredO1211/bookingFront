import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'app/login/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes(`${this.authService.host}/login`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authService.host}/register`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authService.host}/login`)) {
      return httpHandler.handle(httpRequest);
    }
    const token = this.authService.getToken();
    console.log(token);
    const request = httpRequest.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    console.log(request);
    return httpHandler.handle(request);
  }
}
