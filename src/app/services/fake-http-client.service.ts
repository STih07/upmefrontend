import { Injectable } from '@angular/core';
import { of, timer, observable } from 'rxjs';
import { users } from '../fixtures/users';
import { switchMap, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpClientService {
  getUsers() {
    return timer(2000).pipe(switchMap(() => of(users)));
  }
  getUserById(id: number) {
    return of(users.find(user => {
      console.log(user);
      return user.id === id;
    }));
  }
}
