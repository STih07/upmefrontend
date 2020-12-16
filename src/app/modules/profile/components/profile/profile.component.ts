import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from 'src/app/modals/edit-modal/edit-modal.component';
import { SubmitModalComponent } from 'src/app/modals/submit-modal/submit-modal.component';
import { FakeHttpService } from '../../services/fake-http.service';
import { ActivatedRoute } from '@angular/router';
import { PracticeTask, TestTask } from '../../../../models/profile/profile-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  user = null;

  states = [
    { id: 1, name: 'Онбординг', active: true },
    { id: 2, name: 'Бассейн', active: false },
    { id: 3, name: 'Обучение', active: false },
    { id: 4, name: 'Проверка Идеи', active: false },
    { id: 5, name: 'Трудоустройство', active: false },
  ];

  userStates = [
    { id: 0, name: 'Принят' },
    { id: 1, name: 'Принят на испытательный срок' },
    { id: 2, name: 'Не принят' },
    { id: 3, name: 'Не принят. Ты ещё очень юн и мы советуем тебе подать заявку в IT2School' },
  ];
  hasSolution = false;

  selectedTest: TestTask;
  selectedPractice: PracticeTask;

  constructor(
    private toastr: ToastrService,
    private modalService: NgbModal,
    private fakeHttp: FakeHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fakeHttp.getUserById(this.route.snapshot.params.id).subscribe((res) => {
      this.user = res;
      this.selectedTest = this.user.testTasks?.[0];
      this.selectedPractice = this.user.practiceTasks?.[0];
    });
  }

  showTest(test: TestTask) {
    this.selectedTest = test;
  }

  showPractice(practice: PracticeTask) {
    this.selectedPractice = practice;
  }

  getArrayDays(spentDays: number) {
    const length = Math.max(Math.min(spentDays, 10), 7);
    return Array.from({ length }, (x, i) => i + 1);
  }

  getFullName() {
    const [name, surname] = this.user.info.name.split(' ').map((word: string) => word[0]);
    return name + surname;
  }

  getPercentOfDiffrence(num1: number, num2: number): number {
    return ((num1 - num2) * 100 / num1);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  openEditModal(): void {
    this.modalService.open(EditModalComponent);
  }

  openSubmitModal(): void {
    const modalRef = this.modalService.open(SubmitModalComponent);

    modalRef.componentInstance.user = {
      users: [this.user],
      name: this.user.info.name,
      solution: this.userStates[this.user.userStateId].name
    };
    modalRef.componentInstance.entryValue.subscribe((entryValue) => {
    });

  }
}
