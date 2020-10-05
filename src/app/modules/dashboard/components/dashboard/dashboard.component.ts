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

  selected: Set<DashboardUser> = new Set<DashboardUser>();

  constructor(
    private fakeHttp: FakeHttpService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.fakeHttp.getDashBoardUsers().subscribe((res) => {
      this.users = res;
      this.users.forEach(user => user.selected = false);
    });
  }

  deleteUser(user$: any): void {
    this.users = this.users.filter(user => user.id !== user$.id);
  }

  openSubmitModal(): void {
    const modalRef = this.modalService.open(SolutionModalComponent);
    const selectedUsers: Array<DashboardUser> = Array.from(this.selected);

    modalRef.componentInstance.user = {
      users: Array.from(this.selected),
      name: selectedUsers[0].name,
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
    const selectedUsers: Array<DashboardUser> = Array.from(this.selected);
    modalRef.componentInstance.user = {
      users: Array.from(this.selected),
      name: selectedUsers[0].name
    };

    modalRef.result.then((result) => result ? console.log(result) : false);
  }

  isAnySelected(): boolean {
    return this.selected.size > 0;
  }

  select(user: DashboardUser): void {
    if (this.selected.has(user)) {
      this.selected.delete(user);
    } else {
      this.selected.add(user);
    }
  }

  isSelected(user: DashboardUser): boolean {
    return this.selected.has(user);
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
