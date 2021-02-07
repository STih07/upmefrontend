import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { ListUser } from '../../../../models/list-user';
import { Router } from '@angular/router';
import { Resident } from 'src/app/models/residents/resident';
import { Filter } from 'src/app/models/filter';
import { Mentors } from 'src/app/models/mentors/mentors';

@Component({
  selector: 'upme-universal-list-page',
  templateUrl: './universal-list-page.component.html',
  styleUrls: ['./universal-list-page.component.scss']
})
export class UniversalListPageComponent implements OnInit {

  page: PageType;
  list: ListUser[] | Resident[] | Mentors[];
  title: string;
  filters: Filter = {
    hasGlobalSearch: false,
    list: [
      {
        title: 'Направлению',
        hasSearch: true,
        childs: [
          { title: 'Back-End Dev' },
          { title: 'Front-End Dev' },
          { title: 'UX/UI Designer' }
        ]
      }
    ]
  };

  constructor(
    private listsService: ListsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.router.url.match('[\/](residents)')) {
      this.listsService.getResidentsList().subscribe(residentsList => this.list = residentsList);
      this.page = PageType.RESIDENTS;
      this.title = 'Резиденты';
    } else if (this.router.url.match('[\/](mentors)')) {
      this.listsService.getMentorsList().subscribe(mentorsList => this.list = mentorsList);
      this.page = PageType.MENTORS;
      this.title = 'Менторы';
    } else {
      this.listsService.getUsersList().subscribe(usersList => this.list = usersList);
      this.page = PageType.USERS;
      this.title = 'Пользователи';
    }
  }

}

enum PageType {
  RESIDENTS,
  MENTORS,
  USERS
}
