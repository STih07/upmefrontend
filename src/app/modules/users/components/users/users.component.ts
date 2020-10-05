import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ListUser} from '../../../../models/list-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: ListUser[];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(users => this.users = users);
  }

}
