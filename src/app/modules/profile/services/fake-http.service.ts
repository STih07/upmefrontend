import { Injectable } from '@angular/core';
import { of, timer, throwError } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { Progress } from './progress-bar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
  constructor(private progress: Progress, private http: HttpClient) { }

  getUsers() {
    this.progress.start();
    return this.http.get('https://murmuring-stream-64302.herokuapp.com/profile/1').pipe(
      tap(() => this.progress.complete())
    );
  }

  getUserById(id: number) {
    const headers = new HttpHeaders()
    .set('token', 'SOME_VALID_TOKEN');
    this.progress.start();
    return this.http.get(`http://192.168.25.31:8080/api/profile/${id}`, {headers}).pipe(
      tap(() => this.progress.complete())
    );
  }
}
