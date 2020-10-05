import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolutionModalComponent } from 'src/app/modals/solution-modal/solution-modal.component';
import { UserSubmit } from 'src/app/models/user-submit';
import localeFr from '@angular/common/locales/fr';
import { ArchiveModalComponent } from 'src/app/modals/archive-modal/archive-modal.component';
registerLocaleData(localeFr, 'fr');
import { DashboardUser, Task } from '../../../../models/dashboard-user';
import { FakeHttpService } from '../../services/fake-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: DashboardUser[] = null;

  constructor(private fakeHttp: FakeHttpService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.fakeHttp.getDashBoardUsers().subscribe((res) => {
      this.users = res;
      this.users.forEach(user => user.selected = false);
    });
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

  openArchiveModal(): void {
    const modalRef = this.modalService.open(ArchiveModalComponent);
    const firstUser = this.users.find(user$ => user$.selected === true);

    modalRef.componentInstance.user = {
      users: this.users.filter(user$ => user$.selected === true),
      name: firstUser.name
    };

    modalRef.result.then((result) => result ? console.log(result) : false);
  }

  checkOnSelected(): boolean {
    return !this.users.some(user => user.selected === true);
  }

  taskStatus(arrTasks$: Task[]): number {
    const [firstTask, secondTask] = arrTasks$;
    if (firstTask.status === 2 && secondTask.status === 2) {
      return 2;
    } else if (firstTask.status === 1 || secondTask.status === 1) {
      return 1;
    } else {
      return 0;
    }
  }
}
