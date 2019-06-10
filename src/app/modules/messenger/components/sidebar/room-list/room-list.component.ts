import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Room, TypingMessage, User } from '../../../models';

@Component({
  selector: 'ac-sidebar-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class SidebarRoomListComponent {
  @Input() public readonly activeRoom: Room;
  @Input() public readonly rooms: Room[];
  @Input() public readonly currentUser: User;
  @Input() public readonly typingMessages: TypingMessage[];

  @Output() public activeRoomChanged = new EventEmitter<Room>();

  public setActiveRoom(room: Room): void {
    this.activeRoomChanged.emit(room);
  }

  public get sortedRooms() {
    return this.rooms
      .filter(({ messages }) => messages.length > 0)
      .sort((firstRoom, secondRoom) => {
        const firstRoomLastMessage = firstRoom.messages[firstRoom.messages.length - 1];
        const secondRoomLastMessage = secondRoom.messages[secondRoom.messages.length - 1];

        return secondRoomLastMessage.createdAt - firstRoomLastMessage.createdAt;
      });
  }

  public getRoomTypingMessages(room: Room): TypingMessage | TypingMessage[] {
    return this.typingMessages.filter(typingMessage => typingMessage.roomId === room.id);
  }

  public isRoomActive(room: Room): boolean {
    const { activeRoom } = this;

    return activeRoom && (activeRoom.id === room.id);
  }
}
