import { Component, OnInit, Input } from '@angular/core';
import { ProposalUser } from 'src/app/models/proposal/proposal-user';

@Component({
  selector: 'upme-proposal-cards',
  templateUrl: './proposal-cards.component.html',
  styleUrls: ['./proposal-cards.component.scss']
})
export class ProposalCardsComponent implements OnInit {

 @Input() proposalUsers: ProposalUser[];

  constructor() { }

  ngOnInit(): void {
  }

}
