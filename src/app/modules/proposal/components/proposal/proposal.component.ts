import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { ProposalUser } from 'src/app/models/proposal/proposal-user';
import { ProposalService } from '../../services/proposal/proposal.service';

@Component({
  selector: 'upme-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  proposalUsers: ProposalUser[];

  filters: Filter = {
    hasGlobalSearch: true,
    list: [
      {
        title: 'Направлению',
        hasSearch: false,
        childs: [
          {
            title: 'Не определился'
          },
          {
            title: 'Front-End Dev'
          },
          {
            title: 'UX/UI Designer'
          }
        ]
      },
      {
        title: 'Учебное заведение',
        hasSearch: false,
        childs: [
          {
            title: 'ОНПУ'
          },
          {
            title: 'ОНУ им. Мечникова'
          },
          {
            title: 'КЗИ ОНАЗ'
          }
        ]
      },
      {
        title: 'Возраст',
        hasSearch: false,
        childs: [
          {
            title: 'По возрастанию'
          },
          {
            title: 'По убыванию'
          }
        ]
      }
    ]
  };

  constructor(private proposalService: ProposalService) { }

  ngOnInit(): void {
    this.proposalService.getAllUser().subscribe(users => this.proposalUsers = users);
  }

}
