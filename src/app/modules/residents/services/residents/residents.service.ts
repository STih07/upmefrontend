import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resident } from 'src/app/models/residents/resident';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Resident[]> {
    // return this.http.get(...);
    return of([
      {
        id: 1,
        name: 'Yuliia Chudina',
        profile: 'UI/UX Designer',
        status: 'Ментор',
        icon: 'https://i.ibb.co/kJfB8wZ/user-1.png',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia'
      },
      {
        id: 2,
        name: 'Alexandr Yatsenko',
        profile: 'UX/UI Designer',
        status: 'Резидент',
        icon: 'https://i.imgur.com/snZND45.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia'
      },
      {
        id: 3,
        name: 'Maria Kutyrkina',
        profile: 'UX/UI Designer',
        status: 'Резидент',
        icon: 'https://i.imgur.com/OtKzT2u.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia'
      },
      {
        id: 4,
        name: 'Gleb Rutskiy',
        profile: 'Front-end Developer',
        status: 'Резидент',
        icon: 'https://i.imgur.com/vxtF8ZR.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia'
      },
      {
        id: 5,
        name: 'Artyom Kazlanzhy',
        profile: 'Java Backend Developer',
        status: 'Резидент',
        icon: 'https://i.imgur.com/dxhQonP.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia'
      },
      {
        id: 6,
        name: 'Anna Perederii',
        profile: 'QA Automation Engineer(Java)',
        status: 'Ментор',
        icon: 'https://i.imgur.com/I8zokZH.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia'
      },
      {
        id: 7,
        name: 'Kyrylo Meretskiy',
        profile: 'Middle Back-end Engineer(Symphony)',
        status: 'Ментор',
        icon: 'https://i.imgur.com/X9n83E4.png',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia'
      },
      {
        id: 8,
        name: 'Serhii Tihovskii',
        profile: 'Middle Frontend Engineer(Angular)',
        status: 'Ментор',
        icon: 'https://i.imgur.com/KmMA1K5.png',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia'
      }
      // {id: 4, name: 'Евгений Солнышко', profile: 'Frontend Developer', icon: null},
    ]);
  }
}
