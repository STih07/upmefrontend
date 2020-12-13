import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashStatusPipe } from './pipe/dash-status.pipe';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent,
    DashStatusPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
  ]
})
export class DashboardModule { }
