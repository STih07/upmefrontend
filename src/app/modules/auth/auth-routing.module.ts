import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverPassComponent } from './components/recover-pass/recover-pass.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'login'
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'recovery-password', component: RecoverPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
