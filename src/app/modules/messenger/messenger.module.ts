import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { MessangerRoutingModule } from './messanger-routing.module';

import { MaterialModule } from '../../material/material.module';
import { DirectMessageDialogComponent } from './components/direct-message-dialog/direct-message-dialog.component';
import { RoomChatFooterComponent } from './components/room-chat/footer/footer.component';
import { RoomChatHeaderComponent } from './components/room-chat/header/header.component';
import { RoomChatComponent } from './components/room-chat/room-chat.component';
import { SidebarHeaderComponent } from './components/sidebar/header/header.component';
import { SidebarRoomComponent } from './components/sidebar/room/room.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeRouteComponent } from './routes/home/home.component';
import { messengerReducer } from './state';

@NgModule({
  entryComponents: [
    DirectMessageDialogComponent
  ],
  declarations: [
    HomeRouteComponent,

    SidebarComponent,
    SidebarHeaderComponent,
    SidebarRoomComponent,
    DirectMessageDialogComponent,

    RoomChatComponent,
    RoomChatHeaderComponent,
    RoomChatFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MessangerRoutingModule,
    StoreModule.forFeature('messenger', messengerReducer)
  ]
})
export class MessengerModule { }
