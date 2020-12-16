import { Component, Input, OnInit } from '@angular/core';
import { Resident } from './../../../models/residents/resident';

@Component({
  selector: 'upme-mentors-card',
  templateUrl: './mentors-card.component.html',
  styleUrls: ['./mentors-card.component.scss']
})
export class MentorsCardComponent implements OnInit {

  // @Input() mentors: Mentors[];
  @Input() mentors: Resident[];

  constructor() { }

  ngOnInit(): void {
  }

}
