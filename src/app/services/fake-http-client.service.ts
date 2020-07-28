import { Injectable } from '@angular/core';
import { of, timer, observable } from 'rxjs';
import { users } from '../fixtures/users';
import { switchMap, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpClientService {
  getUsers() {
    return timer(Math.round(Math.random() * 300)).pipe(switchMap(() => of(users)));
  }
  getUserById(id: number) {
    return timer(Math.round(Math.random() * 300)).pipe(switchMap(() => of(users.find(user => user.id === id))));
  }
}
