import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposalComponent } from './components/proposal/proposal.component';

const routes: Routes = [{ path: '', component: ProposalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalRoutingModule { }
