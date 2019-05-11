import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';

import { SignInRouteComponent } from './routes/sign-in/sign-in.component';
import { SignUpRouteComponent } from './routes/sign-up/sign-up.component';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    SignInRouteComponent,
    SignUpRouteComponent,

    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AuthModule { }
