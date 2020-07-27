import { Component, OnInit } from '@angular/core';
import { FakeHttpClientService } from './services/fake-http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  users: any;

  arrayOfDays: number[] = Array(7).fill(0).map((x, i) => i);

  states: [
    { id: 1, name: 'Онбординг', active: true },
    { id: 2, name: 'Бассейн', active: false },
    { id: 3, name: 'Обучение', active: false },
    { id: 4, name: 'Проверка Идеи', active: false },
    { id: 5, name: 'Трудоустройство', active: false },
  ];


  constructor(private fakeResponse: FakeHttpClientService) { }

  ngOnInit() {
    this.fakeResponse.get().subscribe(user => {
      this.users = user;
      console.log(user);
    });
  }

  getPercentOfDiffrence(num1: number, num2: number) {
    return ((num1 - num2) * 100 / num1);
  }

}
