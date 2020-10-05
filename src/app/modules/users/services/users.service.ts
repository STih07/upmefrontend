import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ListUser} from '../../../models/list-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ListUser[]> {
    // return this.http.get(...);
    return of([
      {id: 1, profile: 'UI/UX Designer', name: 'Yuliia Chudina', icon: 'https://i.ibb.co/kJfB8wZ/user-1.png'},
      {id: 2, name: 'Alexandr Yatsenko', profile: 'UX/UI Designer', icon: 'https://i.imgur.com/snZND45.jpg'},
      {id: 3, name: 'Maria Kutyrkina', profile: 'UX/UI Designer', icon: 'https://i.imgur.com/OtKzT2u.jpg'},
      {id: 4, name: 'Gleb Rutskiy', profile: 'Front-end Developer', icon: 'https://i.imgur.com/vxtF8ZR.jpg'},
      {id: 5, name: 'Artyom Kazlanzhy', profile: 'Java Backend Developer', icon: 'https://i.imgur.com/dxhQonP.jpg'},
      {id: 6, name: 'Anna Perederii', profile: 'QA Automation Engineer(Java)', icon: 'https://i.imgur.com/I8zokZH.jpg'},
      {id: 7, name: 'Kyrylo Meretskiy', profile: 'Middle Back-end Engineer(Symphony)', icon: 'https://i.imgur.com/X9n83E4.png'},
      {id: 8, name: 'Serhii Tihovskii', profile: 'Middle Frontend Engineer(Angular)', icon: 'https://i.imgur.com/KmMA1K5.png'},
      // {id: 4, name: 'Евгений Солнышко', profile: 'Frontend Developer', icon: null},
    ]);
  }

}
