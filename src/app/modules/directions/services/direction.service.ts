import { Injectable } from '@angular/core';
import { Progress } from '../../profile/services/progress-bar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import { Works } from '../../../models/direction/work';
import { DirectionUser } from '../../../models/direction/direction-user';
import { environment } from '../../../../environments/environment';
import {ListDirection} from '../../../models/direction/list-direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

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

  getAll(): Observable<ListDirection[]> {
    // return this.http...
    return of([
      { id: 1,
        name: 'UI/UX Design',
        schelude: 'ПН 14:30-16:00',
        residents: 7,
        candidates: 6,
        duration: {
          start: '15/03/2020',
          end: null
        },
        mentor: {
          id: 1,
          name: 'Alex Zabiiako',
          icon: 'assets/img/user_alex_img.png'
        }
      }
    ]);
  }

  delete(direction: ListDirection) {
    return of(true);
  }
}
