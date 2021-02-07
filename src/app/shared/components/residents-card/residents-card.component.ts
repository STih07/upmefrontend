import { Component, Input, OnInit } from '@angular/core';
import { Resident } from 'src/app/models/residents/resident';

@Component({
  selector: 'upme-residents-card',
  templateUrl: './residents-card.component.html',
  styleUrls: ['./residents-card.component.scss']
})
export class ResidentsCardComponent implements OnInit {

  @Input() residents: Resident[];

  constructor() { }

  ngOnInit(): void {
  }

}
