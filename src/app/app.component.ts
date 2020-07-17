import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  states = [
    {id: 1, name: 'Onboarding', active: true},
    {id: 2, name: 'Resident',   active: false},
    {id: 3, name: 'Worker',     active: false},
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
    totalDays: 8,
    earlier: {
      days: 2,
      fasterOn: 5,
    },
    formDay: 1,
    testTask: {
      days: 3,
      mistakes: 5,
    },
    practiceTask: {
      days: 3,
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
    tableHardSkill: {},
    tableSoftSkill: {},
  };

  testTaskBlock = {
    status: {
      progress: 'done',
      id: 1,
    },
    daysSpent: [
      {checked: true, box: 1},
      {checked: true, box: 2},
      {checked: true, box: 3},
      {checked: true, box: 4},
      {checked: false, box: 5},
      {checked: false, box: 6},
      {checked: false, box: 7},
    ],
    result: {
      nameResult: 'Хорошо',
      points: 7,
    },
    mistakes: 5,
  };

  practiceTaskBlock = {
    php: {
      ative: true,
      status: {
        progress: 'done',
        id: 1,
      },
      daysSpent: [
        {checked: true, box: 1},
        {checked: true, box: 2},
        {checked: true, box: 3},
        {checked: true, box: 4},
        {checked: false, box: 5},
        {checked: false, box: 6},
        {checked: false, box: 7},
      ],
      rating: {
        nameRating: 'Выполнено с мелкими ошибками',
        points: 40,
      },
      // tslint:disable-next-line:max-line-length
      feetback: 'Кандидат хорошо владеет базовыми знаниями (типы переменнных и операции над ними), небольшой опыт владения классами, льём водичку для красо...',
      tableRating: {},
    },
    front_end: {
      active: false,
    },
  };
  softSkillBlock = {};
}
