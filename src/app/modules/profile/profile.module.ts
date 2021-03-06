import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';

import { AbsPipe } from './pipes/abs.pipe';
import { TaskStatusPipe } from './pipes/status.pipe';
import { RoundPipe } from './pipes/round.pipe';

@NgModule({
  declarations: [
    ProfileComponent,
    TaskStatusPipe,
    RoundPipe,
    AbsPipe
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbModule,
  ]
})
export class ProfileModule { }
