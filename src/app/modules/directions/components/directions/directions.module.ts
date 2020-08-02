import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionsRoutingModule } from './directions-routing.module';
import { DirectionsComponent } from './directions.component';


@NgModule({
  declarations: [DirectionsComponent],
  imports: [
    CommonModule,
    DirectionsRoutingModule
  ]
})
export class DirectionsModule { }
