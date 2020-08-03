import { Component, OnInit } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  progressRef: NgProgressRef;
  response: any;

  arrayOfDays: number[] = Array(7).fill(0).map((x, i) => i);

  states = [
    { id: 1, name: 'Онбординг', active: true },
    { id: 2, name: 'Бассейн', active: false },
    { id: 3, name: 'Обучение', active: false },
    { id: 4, name: 'Проверка Идеи', active: false },
    { id: 5, name: 'Трудоустройство', active: false },
  ];

  mainUser = {
    name: 'Anna D.',
    icon: 'assets/img/user_img.png'
  };

  user = {
    name: 'Yuliia Chudina',
    icon: 'assets/img/user_card_img.png',
    profile: 'UX/UI Designer',
    lastStateId: 2,
    social_media: {
      mail: 'yuliia.chudina@gmail.com',
      phone: '+380 93 350 24 32',
      telegram: {
        username: '@chudiina',
        link: 'https://t.me/stih07'
      },
      linkedin: 'https://www.linkedin.com/in/galina-orishich-a89b69169/'
    },
    points: 123,
  };


  userStates = [
    { id: 1, name: 'Принят' },
    { id: 2, name: 'Принят на испытательный срок' },
    { id: 3, name: 'Не принят' },
    { id: 4, name: 'Не принят. Ты ещё очень юн и мы советуем тебе подать заявку в IT2School' },
  ];
  selectedUserStateId = 1;

  activity = {
    totalDays: {
      average: 10,
      current: 8,
    },
    formDays: {
      average: 1,
      current: 1,
    },
    testDays: {
      average: 3,
      current: 3,
      mistakes: 5
    },
    practiceDays: {
      average: 3,
      current: 3,
      mistakes: 3,
    },
  };

  genInfo = {
    studyingTime: {
      began: '12-03-2020',
      finished: '--',
    },
    education: {
      institution: 'КЗИ ОНАС',
      faculty: 'Разработчик ПО 4 курс',
      otherAchievements: '3 класса музікальной школі, зборная колледжа по волейболу',
    },
    // tslint:disable-next-line:max-line-length
    motivation: 'Хочу получать акутульное образование сфере ИТ и находиться среди ребят, который любят и ценят самообразование. Так же всегда мечтала заниматься инетресным делом и получать от этого удовольствие. Хочу получать акуаульно образование сфере ИТ и находиться среди ребят, который любят и ценят самообразование. Так же всегда мечтала заниматься который любят...',
    tableHardSkill: [
      // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
      { name: 'PHP', userRating: 4 },
      { name: 'SQL', userRating: 3 },
      { name: 'Front-end', userRating: 4 },
    ],
    tableSoftSkill: [
      // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
      { name: 'Критическое мышление', userRating: 1 },
      { name: 'Усидчивость', userRating: 3 },
      { name: 'Коммуникабельность', userRating: 2 },
    ],
  };

  testTaskBlock = {
    name: 'SQL',
    status: 1,
    daysSpent: 5,
    result: {
      points: 7,
      maxPossiblePoints: 10,
    },
    mistakes: 5,
  };

  practiceTaskBlock = [
    {
      name: 'PHP',
      // status: 0 == IN PROGRESS, status: 1 == DONE
      status: 1,
      daysSpent: 5,
      rating: {
        points: 10,
        maxPossiblePoints: 50,
      },
      // tslint:disable-next-line:max-line-length
      feetback: 'Кандидат хорошо владеет базовыми знаниями (типы переменнных и операции над ними), небольшой опыт владения классами, льём водичку для красо...',
      tableRating: [
        // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
        { name: 'Самооценка', userRating: 4 },
        { name: 'Оценка ментора', mentorRating: 3 },
      ],
      source: {
        nameFile: 'name_of_file.png',
        type: 'png',
        size: '45mb',
      }
    }
  ];

  softSkillBlock = [
    // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
    { name: 'Критическое мышление', userRating: 1, mentorRating: 1 },
    { name: 'Коммуникабельность', userRating: 1, mentorRating: 2 },
    { name: 'Командная работа', userRating: 2, mentorRating: 0 },
    { name: 'Выносливость', userRating: 3, mentorRating: 0 },
  ];

  constructor(private ngProgress: NgProgress, private http: HttpClient, private modal: NgxSmartModalService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() { }

  getUserState() {
    return this.userStates.find(state => state.id === this.selectedUserStateId);
  }

  getPercentOfDiffrence(num1: number, num2: number) {
    return ((num1 - num2) * 100 / num1);
  }

  openEditModal() {
    return this.modal.getModal('editModal').open();
  }

  openConfirmationModal() {
    this.modal.getModal('submitModal').open();
  }

}
