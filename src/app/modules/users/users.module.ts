import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersComponent }
];


@NgModule({
  declarations: [UsersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
  ]
})
export class UsersModule { }
