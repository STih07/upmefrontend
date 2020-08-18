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
      // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
      formTask: 3,
      letterTask: 3,
      testTasks: [
        // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
        { status: 3, name: 'PHP' },
        { status: 3, name: 'SQL' }
      ],
      practiceTasks: [
        // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
        { status: 3, name: 'Front-end' },
        { status: 3, name: 'Design' }
      ],
      decision: 'Принят',
      finish: '15/03/2020',
    },
    {
      id: 2,
      name: 'Darrell Web',
      image: 'assets/img/user_card_img.png',
      begin: '06/02/2020',
      // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
      formTask: 3,
      letterTask: 3,
      testTasks: [
        // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
        { status: 3, name: 'PHP' },
        { status: 3, name: 'SQL' }
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
      // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
      formTask: 3,
      letterTask: 1,
      testTasks: [
        // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
        { status: 1, name: 'PHP' },
        { status: 1, name: 'SQL' }
      ],
      practiceTasks: [
        // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
        { status: 1, name: 'Front-end' },
        { status: 1, name: 'Design' }
      ],
      decision: 'Принят на испытательный',
      finish: '17/03/2020',
    },
    {
      id: 4,
      name: 'Cody Cooper',
      image: 'assets/img/user_card_img.png',
      begin: '06/02/2020',
      // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
      formTask: 3,
      letterTask: 3,
      testTasks: [
        // 1 ==> don't begin, 2 ==> in progress, 3 ==> complete
        { status: 3, name: 'PHP' },
        { status: 2, name: 'SQL' }
      ],
      practiceTasks: null,
      decision: 'Принят на испытательный',
      finish: '17/03/2020',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
