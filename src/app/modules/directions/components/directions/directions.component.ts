import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  works = [
    {
      id: 0,
      name: 'Всего',
      amount: 68,
    },
    {
      id: 1,
      name: 'В работе',
      amount: 8,
    },
    {
      id: 2,
      name: 'Проверенные',
      amount: 12,
    }
  ];

  selectedWorks = 0;

  users = [
    {
      id: 1, // ???
      name: 'Yuliia Chudina',
      image: 'assets/img/user_card_img.png',
      source: 'https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/',
      stage: 'Онбординг',
      // 0 - awaiting, 1 - in progress, 2 - checked
      status: 2,
      // 0 - no passed, 1 - with misses, 2 - good, 3 - excellent
      rating: 3, // ???
      // tslint:disable-next-line:max-line-length
      feedBack: 'Кандидат хорошо владеет базовыми знаниями (типы переменнных и операции над ними), небольшой опыт владения классами, льём водичку для красоты, чтобы текста было много, очень много' // ???
    },
    {
      id: 2, // ???
      name: 'Darrell Webb',
      image: 'assets/img/user_card_img.png',
      source: 'https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/',
      stage: 'Онбординг',
      // 0 - awaiting, 1 - in progress, 2 - checked
      status: 1,
      // 0 - no passed, 1 - with misses, 2 - good, 3 - excellent
      rating: 3, // ???
      // tslint:disable-next-line:max-line-length
      feedBack: 'Оставьте комментарий' // ???
    },
    {
      id: 3, // ???
      name: 'Lyli Nith',
      image: 'assets/img/user_card_img.png',
      source: 'https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/',
      stage: 'Онбординг',
      // 0 - awaiting, 1 - in progress, 2 - checked
      status: 0,
      // 0 - no passed, 1 - with misses, 2 - good, 3 - excellent
      rating: 3, // ???
      // tslint:disable-next-line:max-line-length
      feedBack: 'Оставьте комментарий' // ???
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
