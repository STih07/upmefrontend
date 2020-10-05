import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionsRoutingModule } from './directions-routing.module';
import { DirectionsComponent } from './components/directions/directions.component';
import { TaskStatus } from './pipe/status-task.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DirectionsComponent,
    TaskStatus
  ],
  imports: [
    CommonModule,
    DirectionsRoutingModule,
    NgbModule
  ]
})
export class DirectionsModule { }
