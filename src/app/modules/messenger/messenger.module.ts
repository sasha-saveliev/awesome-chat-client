import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessangerRoutingModule } from './messanger-routing.module';

import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MessangerRoutingModule
  ]
})
export class MessengerModule { }
