import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/guards';
import { HomeRouteComponent } from './routes/home/home.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeRouteComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class MessangerRoutingModule { }
