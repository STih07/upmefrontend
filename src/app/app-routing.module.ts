import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from './modules/auth/auth.guard';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'direction',
        loadChildren: () => import('./modules/directions/directions.module').then(m => m.DirectionsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'proposal',
        loadChildren: () => import('./modules/proposal/proposal.module').then(m => m.ProposalModule)
      },
      {
        path: 'residents',
        loadChildren: () => import('./modules/residents/residents.module').then(m => m.ResidentsModule)
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
