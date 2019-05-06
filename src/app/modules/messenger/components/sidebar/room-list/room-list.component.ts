import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Room, User } from '../../../models';

@Component({
  selector: 'ac-sidebar-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class SidebarRoomListComponent {
  @Input() public readonly activeRoom: Room;
  @Input() public readonly rooms: Room[];
  @Input() public readonly currentUser: User;

  @Output() public activeRoomChanged = new EventEmitter<Room>();

  public setActiveRoom(room: Room): void {
    this.activeRoomChanged.emit(room);
  }

  public get notEmptyRooms() {
    return this.rooms.filter(({ messages }) => messages.length > 0);
  }
}
