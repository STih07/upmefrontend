import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Progress } from './progress-bar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
  constructor(private progress: Progress, private http: HttpClient) { }

  getUsers() {
    this.progress.start();
    return this.http.get('https://murmuring-stream-64302.herokuapp.com/api/profile').pipe(
      tap(() => this.progress.complete())
    );
  }

  getUserById(id: number) {
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('access_token') || 'SOME_VALID_TOKEN');
    this.progress.start();
    return this.http.get(`https://murmuring-stream-64302.herokuapp.com/api/profile/${id}`, {headers}).pipe(
      tap(() => this.progress.complete())
    );
  }
}
