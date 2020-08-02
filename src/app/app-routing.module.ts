import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/components/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'directions',
    loadChildren: () => import('./modules/directions/components/directions/directions.module').then(m => m.DirectionsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
