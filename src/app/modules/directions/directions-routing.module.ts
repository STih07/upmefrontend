import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionComponent } from './components/direction/direction.component';
import {DirectionsComponent} from './components/directions/directions.component';

const routes: Routes = [
  { path: '', component: DirectionsComponent },
  { path: ':id', component: DirectionComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectionsRoutingModule { }
