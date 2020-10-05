import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { Works } from '../../../../models/direction/work';
import { DirectionService } from '../../services/direction.service';
import { DirectionUser } from '../../../../models/direction/direction-user';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {

  works: Works[] = null;

  selectedWorks = 0;

  users: DirectionUser[] = null;

  constructor(private directionService: DirectionService) {
  }

  ngOnInit(): void {
    this.directionService.getWorks().subscribe(res => this.works = res);
    this.directionService.getDirectionUsers().subscribe(res => this.users = res);
  }
}
