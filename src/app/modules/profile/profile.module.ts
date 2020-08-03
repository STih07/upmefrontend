import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { TaskStatusPipe } from './pipes/status.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    ProfileComponent,
    TaskStatusPipe,
    RoundPipe,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxSmartModalModule.forRoot(),
  ]
})

export class ProfileModule { }
