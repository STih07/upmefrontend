import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../../models/login-request';
import { AuthResponse } from '../../../models/auth-response';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../../../models/register-request';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static loginRequestUrl = 'http://my-json-server.typicode.com/ArtyomKazlanzhi/json-holder/authResponse';

  constructor(private http: HttpClient) {
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(AuthService.loginRequestUrl).pipe(
      tap(authResponse => localStorage.setItem('auth', authResponse.accessToken))
    );
  }

  register(data: RegisterRequest): Observable<any> {
    return this.http.get(AuthService.loginRequestUrl);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('auth') != null;
  }
}
