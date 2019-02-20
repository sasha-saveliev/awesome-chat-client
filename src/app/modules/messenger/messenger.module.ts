import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessangerRoutingModule } from './messanger-routing.module';

import { SidebarHeaderComponent } from './components/sidebar/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeRouteComponent } from './routes/home/home.component';

@NgModule({
  declarations: [
    HomeRouteComponent,
    SidebarComponent,
    SidebarHeaderComponent
  ],
  imports: [
    CommonModule,
    MessangerRoutingModule
  ]
})
export class MessengerModule { }
