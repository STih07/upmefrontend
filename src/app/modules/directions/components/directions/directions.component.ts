import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { Works } from '../../../../models/direction/work';
import { FakeHttpService } from '../../services/fake-http.service';
import { DirectionUser } from '../../../../models/direction/direction-user';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  works: Works[] = null;

  selectedWorks = 0;

  users: DirectionUser[] = null;

  constructor(private fakeHttp: FakeHttpService) {
  }

  ngOnInit(): void {
    this.fakeHttp.getWorks().subscribe(res => this.works = res);
    this.fakeHttp.getDirectionUsers().subscribe(res => this.users = res);
  }
}
