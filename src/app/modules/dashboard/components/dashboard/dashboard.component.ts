import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'Yuliia Chudina',
      image: 'assets/img/user_card_img.png',
      begin: '26/02/2020',
      // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
      formTask: 2,
      letterTask: 2,
      testTasks: [
        // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
        { status: 2, name: 'PHP' },
        { status: 2, name: 'SQL' }
      ],
      practiceTasks: [
        // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
        { status: 2, name: 'Front-end' },
        { status: 2, name: 'Design' }
      ],
      decision: 'Принят',
      finish: '15/03/2020',
    },
    {
      id: 2,
      name: 'Darrell Web',
      image: 'assets/img/user_card_img.png',
      begin: '06/02/2020',
      // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
      formTask: 2,
      letterTask: 2,
      testTasks: [
        // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
        { status: 2, name: 'PHP' },
        { status: 2, name: 'SQL' }
      ],
      practiceTasks: null,
      decision: 'Принят на испытательный',
      finish: '17/03/2020',
    },
    {
      id: 3,
      name: 'Lily Bell',
      image: 'assets/img/user_card_img.png',
      begin: '01/02/2020',
      // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
      formTask: 2,
      letterTask: 0,
      testTasks: [
        // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
        { status: 0, name: 'PHP' },
        { status: 0, name: 'SQL' }
      ],
      practiceTasks: [
        // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
        { status: 1, name: 'Front-end' },
        { status: 1, name: 'Design' }
      ],
      decision: 'Не принят',
      finish: '--',
    },
    {
      id: 4,
      name: 'Cody Cooper',
      image: 'assets/img/user_card_img.png',
      begin: '06/02/2020',
      // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
      formTask: 2,
      letterTask: 2,
      testTasks: [
        // 0 ==> don't begin, 1 ==> in progress, 2 ==> complete
        { status: 2, name: 'PHP' },
        { status: 1, name: 'SQL' }
      ],
      practiceTasks: null,
      decision: 'Не принят, еще очень юн, советуем пойти в it2school',
      finish: '--',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
