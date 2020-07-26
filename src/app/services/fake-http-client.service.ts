import { Injectable } from '@angular/core';
import { of, timer } from 'rxjs';
import { users } from '../fixtures/users';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpClientService {
  get(fakeUser: any) {
  return timer(2000).pipe(switchMap(() => of(users)));
  }
}
