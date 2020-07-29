import { Component, OnInit } from '@angular/core';
import { FakeHttpClientService } from './services/fake-http-client.service';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  users: any;
  userProfile: any = null;
  progressRef: NgProgressRef;

  arrayOfDays: number[] = Array(7).fill(0).map((x, i) => i);

  states = [
    { id: 1, name: 'Онбординг', active: true },
    { id: 2, name: 'Бассейн', active: false },
    { id: 3, name: 'Обучение', active: false },
    { id: 4, name: 'Проверка Идеи', active: false },
    { id: 5, name: 'Трудоустройство', active: false },
  ];

  userStates = [
    { id: 1, name: 'Принят' },
    { id: 2, name: 'Принят на испытательный срок' },
    { id: 3, name: 'Не принят' },
    { id: 4, name: 'Не принят. Ты ещё очень юн и мы советуем тебе подать заявку в IT2School' },
  ];

  selectedUserStateId: 1;

  constructor(private fakeResponse: FakeHttpClientService, private progress: NgProgress) { }

  ngOnInit() {
    this.progressRef = this.progress.ref('progressBar');

    this.progressRef.start();

    this.fakeResponse.getUsers().subscribe(user => {
      this.users = user;
    });
    this.fakeResponse.getUserById(1).subscribe(user => {
      console.log(user);
      this.progressRef.complete();
      return this.userProfile = user;
    });
  }

  getPercentOfDiffrence(num1: number, num2: number) {
    return ((num1 - num2) * 100 / num1);
  }
}
