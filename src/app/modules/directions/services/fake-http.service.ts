import { Injectable } from '@angular/core';
import { Progress } from '../../profile/services/progress-bar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Works } from '../../../models/direction/work';
import { DirectionUser } from '../../../models/direction/direction-user';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {

  private static API_URL = 'https://murmuring-stream-64302.herokuapp.com/api/direction';

  constructor(private progress: Progress, private http: HttpClient) {
  }

  getWorks(): Observable<Works[]> {
    const headers = new HttpHeaders()
      .set('token', 'SOME_VALID_TOKEN');
    this.progress.start();
    return this.http.get<Works[]>(FakeHttpService.API_URL + '/works', {headers}).pipe(
      tap(() => this.progress.complete())
    );
  }

  getDirectionUsers(): Observable<DirectionUser[]> {
    const headers = new HttpHeaders()
      .set('token', 'SOME_VALID_TOKEN');
    return this.http.get<DirectionUser[]>(FakeHttpService.API_URL + '/users', {headers});
  }
}
