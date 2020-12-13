import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { Works } from '../../../../models/direction/work';
import { DirectionService } from '../../services/direction.service';
import { DirectionUser } from '../../../../models/direction/direction-user';
import { title } from 'process';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {

  works: Works[] = null;

  chartData = [['Не проверено', 48], ['Без оценки', 8], ['Проверено', 12]];
  chartOptions = {
    legend: 'none',
    colors: ['#8492A6', '#FF5630', '#3DB280'],
  };

  chartCircles = [
    '../../../../../assets/icons/chart-circle-gray.svg',
    '../../../../../assets/icons/chart-circle-red.svg',
    '../../../../../assets/icons/chart-circle-green.svg'
  ]

  selectedWorks = 0;

  selected: Set<DirectionUser> = new Set<DirectionUser>();

  users: DirectionUser[] = null;

  constructor(private directionService: DirectionService) {
  }

  ngOnInit(): void {
    this.directionService.getWorks().subscribe(res => this.works = res);
    this.directionService.getDirectionUsers().subscribe(res => this.users = res);
  }

  select(user: DirectionUser): void {
    if (this.selected.has(user)) {
      this.selected.delete(user);
    } else {
      this.selected.add(user);
    }
  }

  isSelected(user: DirectionUser): boolean {
    return this.selected.has(user);
  }
}
