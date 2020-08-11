import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
