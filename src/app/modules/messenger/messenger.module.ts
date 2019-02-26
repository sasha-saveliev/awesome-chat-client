import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { MessangerRoutingModule } from './messanger-routing.module';

import { SidebarHeaderComponent } from './components/sidebar/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeRouteComponent } from './routes/home/home.component';
import { RoomRouteComponent } from './routes/home/room/room.component';
import { messengerReducer } from './state';

@NgModule({
  declarations: [
    HomeRouteComponent,
    RoomRouteComponent,

    SidebarComponent,
    SidebarHeaderComponent
  ],
  imports: [
    CommonModule,
    MessangerRoutingModule,
    StoreModule.forFeature('messenger', messengerReducer)
  ]
})
export class MessengerModule { }
