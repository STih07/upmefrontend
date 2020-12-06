import { Component, OnInit } from '@angular/core';
import { ProposalUser } from 'src/app/models/proposal/proposal-user';
import { ProposalService } from '../../services/proposal/proposal.service';

@Component({
  selector: 'upme-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  proposalUser: ProposalUser[];

  constructor(private proposalService: ProposalService) { }

  ngOnInit(): void {
    this.proposalService.getAllUser().subscribe(users => this.proposalUser = users);
  }

}
