import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersComponent }
];


@NgModule({
  declarations: [UsersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersModule { }