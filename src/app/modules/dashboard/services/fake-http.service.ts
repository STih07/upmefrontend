import { Injectable } from '@angular/core';
import { Progress } from '../../profile/services/progress-bar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { DashboardUser } from '../../../models/dashboard/dashboard-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {

  private static API_URL = 'https://murmuring-stream-64302.herokuapp.com/api';

  constructor(private progress: Progress, private http: HttpClient) {
  }

  getDashBoardUsers(): Observable<DashboardUser[]> {
    const headers = new HttpHeaders()
      .set('token', 'SOME_VALID_TOKEN');
    this.progress.start();
    return this.http.get<DashboardUser[]>(FakeHttpService.API_URL + '/dashboard', {headers}).pipe(
      tap(() => this.progress.complete())
    );
  }
}
