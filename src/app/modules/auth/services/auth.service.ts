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

  private static BASE_URL = 'https://murmuring-stream-64302.herokuapp.com/api/auth';

  constructor(private http: HttpClient) {
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(AuthService.BASE_URL + '/login', data).pipe(
      tap(authResponse => this.setTokens(authResponse)));
  }

  register(data: RegisterRequest): Observable<any> {
    return this.http.post<AuthResponse>(AuthService.BASE_URL + '/register', data).pipe(
      tap(authResponse => this.setTokens(authResponse)));
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('access_token') != null;
  }

  private setTokens(authResponse: AuthResponse): void {
    localStorage.setItem('access_token', authResponse.accessToken);
    localStorage.setItem('refresh_token', authResponse.refreshToken);
  }
}
