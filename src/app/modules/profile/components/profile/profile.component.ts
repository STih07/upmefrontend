import {Component, OnInit, ViewChild} from '@angular/core';
import {FakeHttpClient} from '../../../../services/fake-http-client.service';
import {ActivatedRoute} from '@angular/router';
import {PracticeTask, TestTask} from '../../../../models/profile-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  selectedSolution = null;
  hasSolution = false;

  arrayOfDays: number[] = Array(7).fill(0).map((x, i) => i);

  states = [
    {id: 1, name: 'Онбординг', active: true},
    {id: 2, name: 'Бассейн', active: false},
    {id: 3, name: 'Обучение', active: false},
    {id: 4, name: 'Проверка Идеи', active: false},
    {id: 5, name: 'Трудоустройство', active: false},
  ];

  userStates = [
    {id: 1, name: 'Принят'},
    {id: 2, name: 'Принят на испытательный срок'},
    {id: 3, name: 'Не принят'},
    {id: 4, name: 'Не принят. Ты ещё очень юн и мы советуем тебе подать заявку в IT2School'},
  ];

  selectedUserStateId = null;
  selectedTest: TestTask;
  selectedPractice: PracticeTask;

  constructor(
    private fakeResponse: FakeHttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fakeResponse.getUserById(this.route.snapshot.params.id).subscribe(user => {
      this.user = user;
      this.selectedTest = this.user.testTasks?.[0];
    });
  }

  getPercentOfDifference(num1: number, num2: number) {
    return ((num1 - num2) * 100 / num1);
  }

  scrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  showTest(test: TestTask) {
    this.selectedTest = test;
  }

  showPractice(practice: PracticeTask) {
    this.selectedPractice = practice;
  }
}
