import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsComponent } from './components/residents/residents.component';


@NgModule({
  declarations: [ResidentsComponent],
  imports: [
    CommonModule,
    ResidentsRoutingModule
  ]
})
export class ResidentsModule { }
