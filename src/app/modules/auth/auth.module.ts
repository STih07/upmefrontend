import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { ChangepassComponent } from 'src/app/modals/changepass/changepass.component';
import { RecoverPassComponent } from './components/recover-pass/recover-pass.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ChangepassComponent, RecoverPassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
