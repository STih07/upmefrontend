import { Component, ViewChild } from '@angular/core';

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

  @ViewChild('solution') solutionRef ;
    scrollToTop() {
      setTimeout(()=> {
        this.solutionRef.nativeElement.classList.add('heartbeat')
     },0)
      this.solutionRef.nativeElement.classList.remove('heartbeat');
      window.scrollTo({top:0,left:0,behavior:'smooth'});
  }
} 
