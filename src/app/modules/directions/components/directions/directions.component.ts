import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  works = {
    total: 68,
    inProgress: 8,
    checked: 12
  };

  users = [
    {
      id: 1, // ???
      name: 'Yuliia Chudina',
      icon: 'assets/img/user_card_img.png',
      source: 'https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/',
      stage: 'Онбординг',
      // 1 - awaiting, 2 - in progress, 3 - checked
      status: 3,
      // 1 - no passed, 2 - with misses, 3 - good, 4 - excellent
      rating: 4, // ???
      // tslint:disable-next-line:max-line-length
      feedBack: 'Кандидат хорошо владеет базовыми знаниями (типы переменнных и операции над ними), небольшой опыт владения классами, льём водичку для красоты, чтобы текста было много, очень много' // ???
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
