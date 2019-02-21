import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInRouteComponent } from './routes/sign-in/sign-in.component';
import { SignUpRouteComponent } from './routes/sign-up/sign-up.component';

const ROUTES: Routes = [
  {
    path: 'sign-in',
    component: SignInRouteComponent
  },
  {
    path: 'sign-up',
    component: SignUpRouteComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
