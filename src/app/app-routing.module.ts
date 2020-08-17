import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './modules/auth/auth.guard';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'directions',
        loadChildren: () => import('./modules/directions/directions.module').then(m => m.DirectionsModule)
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
