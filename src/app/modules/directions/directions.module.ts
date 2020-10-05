import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionsRoutingModule } from './directions-routing.module';
import { DirectionComponent } from './components/direction/direction.component';
import { TaskStatus } from './pipe/status-task.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectionsComponent } from './components/directions/directions.component';

@NgModule({
  declarations: [
    DirectionComponent,
    TaskStatus,
    DirectionsComponent
  ],
  imports: [
    CommonModule,
    DirectionsRoutingModule,
    NgbModule
  ]
})
export class DirectionsModule { }
