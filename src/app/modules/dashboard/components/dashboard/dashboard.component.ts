import { Component, OnInit } from '@angular/core';
import { DashboardUser } from '../../../../models/dashboard-user';
import { FakeHttpService } from '../../services/fake-http.service';

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

}
