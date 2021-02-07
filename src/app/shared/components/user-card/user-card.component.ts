import { Component, Input, OnInit } from '@angular/core';
import { ListUser } from '../../../models/list-user';

@Component({
  selector: 'upme-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() users: ListUser[];

  constructor() { }

  ngOnInit(): void {
  }

}
