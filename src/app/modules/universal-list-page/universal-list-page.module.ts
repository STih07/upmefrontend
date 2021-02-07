import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalListPageComponent } from './components/universal-list-page/universal-list-page.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: UniversalListPageComponent }
];


@NgModule({
  declarations: [UniversalListPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class UniversalListPageModule { }
