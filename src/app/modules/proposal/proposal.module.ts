import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './components/proposal/proposal.component';


@NgModule({
  declarations: [ProposalComponent],
  imports: [
    CommonModule,
    ProposalRoutingModule
  ]
})
export class ProposalModule { }
