import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProposalUser } from 'src/app/models/proposal/proposal-user';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor() { }

  getAllUser(): Observable<ProposalUser[]> {
    // return this.http.get(...);
    return of([
      {
        id: 1,
        name: 'Yuliia Chudina',
        icon: 'https://i.ibb.co/kJfB8wZ/user-1.png',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia',
        institution: 'ONPU'
      },
      {
        id: 2,
        name: 'Alexandr Yatsenko',
        icon: 'https://i.imgur.com/snZND45.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia',
        institution: 'ONPU'
      },
      {
        id: 3,
        name: 'Maria Kutyrkina',
        icon: 'https://i.imgur.com/OtKzT2u.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia',
        institution: 'ONPU'
      },
      {
        id: 4,
        name: 'Gleb Rutskiy',
        icon: 'https://i.imgur.com/vxtF8ZR.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia',
        institution: 'ONPU'
      },
      {
        id: 5,
        name: 'Artyom Kazlanzhy',
        icon: 'https://i.imgur.com/dxhQonP.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia',
        institution: 'ONPU'
      },
      {
        id: 6,
        name: 'Anna Perederii',
        icon: 'https://i.imgur.com/I8zokZH.jpg',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia',
        institution: 'ONPU'
      },
      {
        id: 7,
        name: 'Kyrylo Meretskiy',
        icon: 'https://i.imgur.com/X9n83E4.png',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia',
        institution: 'ONPU'
      },
      {
        id: 8,
        name: 'Serhii Tihovskii',
        icon: 'https://i.imgur.com/KmMA1K5.png',
        birthday: '18.01.2001',
        mail: 'yourmail@gmail.com',
        phone: '+380985673213',
        telegram: '@yuliia',
        institution: 'ONPU'
      }
      // {id: 4, name: 'Евгений Солнышко', profile: 'Frontend Developer', icon: null},
    ]);
  }
}
