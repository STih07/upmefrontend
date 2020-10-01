import { Injectable } from '@angular/core';
import { Progress } from '../../profile/services/progress-bar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Works } from '../../../models/direction/work';
import { DirectionUser } from '../../../models/direction/direction-user';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {

  constructor(private progress: Progress, private http: HttpClient) {
  }

  getWorks(): Observable<Works[]> {
    const headers = new HttpHeaders()
      .set('token', 'SOME_VALID_TOKEN');
    this.progress.start();
    return this.http.get<Works[]>(environment.API_URL + '/direction/works', {headers}).pipe(
      tap(() => this.progress.complete())
    );
  }

  getDirectionUsers(): Observable<DirectionUser[]> {
    const headers = new HttpHeaders()
      .set('token', 'SOME_VALID_TOKEN');
    return this.http.get<DirectionUser[]>(environment.API_URL + '/direction/users', {headers});
  }
}
