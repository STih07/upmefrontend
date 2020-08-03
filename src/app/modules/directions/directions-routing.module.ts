import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionsComponent } from './components/directions/directions.component';

const routes: Routes = [{ path: '', component: DirectionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectionsRoutingModule { }
