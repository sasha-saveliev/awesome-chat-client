import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/guards';
import { HomeRouteComponent } from './routes/home/home.component';
import { RoomRouteComponent } from './routes/home/room/room.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeRouteComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':roomId', component: RoomRouteComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class MessangerRoutingModule { }
