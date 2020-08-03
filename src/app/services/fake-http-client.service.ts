import { Injectable } from '@angular/core';
import { of, timer, throwError } from 'rxjs';
import { users } from '../fixtures/users';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { Progress } from './progress-bar.service';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpClient {
  constructor(private progress: Progress) {}

  getUsers() {
    return this.randomTimer().pipe(switchMap(() => of(users)));
  }

  randomTimer() {
    return timer(Math.round(Math.random() * 300));
  }

  getUserById(id: number) {
    this.progress.start();
    return this.randomTimer().pipe(
      switchMap(() => of(users.find(user => user.id == id))),
      tap(() => this.progress.complete()),
      catchError(() => throwError(this.progress.setConfig()))
    );
  }
}
