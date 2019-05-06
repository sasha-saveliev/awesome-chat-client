import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { MessangerRoutingModule } from './messanger-routing.module';

import { MaterialModule } from '../../material/material.module';
import { DirectMessageDialogComponent } from './components/direct-message-dialog/direct-message-dialog.component';
import { RoomChatFooterComponent } from './components/room-chat/footer/footer.component';
import { RoomChatHeaderComponent } from './components/room-chat/header/header.component';
import { MessageComponent } from './components/room-chat/message/message.component';
import { RoomChatComponent } from './components/room-chat/room-chat.component';
import { SidebarContactItemComponent } from './components/sidebar/contacts/contact-item/contact-item.component';
import { SidebarContactsComponent } from './components/sidebar/contacts/contacts.component';
import { SidebarFooterComponent } from './components/sidebar/footer/footer.component';
import { SidebarHeaderComponent } from './components/sidebar/header/header.component';
import { SidebarRoomListComponent } from './components/sidebar/room-list/room-list.component';
import { SidebarRoomComponent } from './components/sidebar/room-list/room/room.component';
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
    SidebarFooterComponent,
    SidebarRoomComponent,
    DirectMessageDialogComponent,

    RoomChatComponent,
    RoomChatHeaderComponent,
    RoomChatFooterComponent,
    MessageComponent,
    SidebarRoomListComponent,
    SidebarContactsComponent,
    SidebarContactItemComponent
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
