import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepassComponent } from './components/changepass/changepass.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPassComponent } from './components/recover-pass/recover-pass.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'recovery-password', component: RecoverPassComponent
  },
  {
    path: 'change-password', component: ChangepassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
