import { Component, OnInit } from '@angular/core';
  import { registerLocaleData } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolutionModalComponent } from 'src/app/modals/solution-modal/solution-modal.component';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: DashboardUser[] = null;

  constructor(private fakeHttp: FakeHttpService) {
  }

  ngOnInit(): void {
    this.fakeHttp.getDashBoardUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
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

    modalRef.componentInstance.backValue.subscribe((entryValue) => {
      this.users.forEach(user$ => {
        const findUser = entryValue.users.find(user2$ => user$.id === user2$.id);
        return findUser !== undefined ? (user$.decision = findUser.decision) : user$.decision;
      });
    });
  }
}
