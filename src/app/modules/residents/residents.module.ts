import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsComponent } from './components/residents/residents.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ResidentsComponent],
  imports: [
    CommonModule,
    ResidentsRoutingModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ResidentsModule { }
