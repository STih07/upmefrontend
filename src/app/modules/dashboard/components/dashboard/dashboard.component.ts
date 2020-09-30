import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolutionModalComponent } from 'src/app/modals/solution-modal/solution-modal.component';
import { UserSubmit } from 'src/app/models/user-submit';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

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
      image: 'assets/img/user_1.png',
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
      selected: true
    },
    {
      id: 2,
      name: 'Darrell Web',
      image: 'assets/img/user_1.png',
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
      selected: true
    },
    {
      id: 3,
      name: 'Lily Bell',
      image: 'assets/img/user_1.png',
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
      selected: false
    },
    {
      id: 4,
      name: 'Cody Cooper',
      image: 'assets/img/user_1.png',
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
      decision: 'Не принят. Ты ещё очень юн и мы советуем тебе подать заявку в IT2School',
      finish: '--',
      selected: true
    },
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  checkUser(id$: number): void {
    this.users[id$ - 1].selected = !this.users[id$ - 1].selected;
  }

  deleteUser(user$: any): void {
    this.users = this.users.filter(user => user.id !== user$.id);
  }

  openSubmitModal(): void {
    const modalRef = this.modalService.open(SolutionModalComponent);
    const firstUser = this.users.find(user$ => user$.selected === true);

    modalRef.componentInstance.user = {
      users: this.users.filter(user$ => user$.selected === true),
      name: firstUser.name,
      solution: null
    };

    modalRef.componentInstance.backValue.subscribe((entryValue: UserSubmit) => {
      this.users.forEach(user$ => {
        const findUser = entryValue.users.find(entryUser$ => user$.id === entryUser$.id);
        return findUser !== undefined ? (user$.decision = findUser.decision) : user$.decision;
      });
    });
  }
}
