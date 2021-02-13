import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginRequest } from '../../../models/auth/login-request';
import { AuthResponse } from '../../../models/auth/auth-response';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../../../models/auth/register-request';
import { delay, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(environment.API_URL + '/auth/login', data).pipe(
      tap(authResponse => this.setTokens(authResponse)));
  }

  register(data: RegisterRequest): Observable<any> {
    return this.http.post<AuthResponse>(environment.API_URL + '/auth/register', data).pipe(
      tap(authResponse => this.setTokens(authResponse)));
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('access_token') != null;
  }

  changePass(): Observable<boolean> {
    return of(true).pipe(
      delay(1000)
    )
  }

  private setTokens(authResponse: AuthResponse): void {
    localStorage.setItem('access_token', authResponse.accessToken);
    localStorage.setItem('refresh_token', authResponse.refreshToken);
  }
}
