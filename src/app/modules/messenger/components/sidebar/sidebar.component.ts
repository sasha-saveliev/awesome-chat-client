import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { Room, SidebarSection, TypingMessage, User } from '../../models';
import { RoomService } from '../../services';
import { AddRoomAction, SetActiveRoomAction, SetActiveSidebarSectionAction, State } from '../../state';

@Component({
  selector: 'ac-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() public activeSection: SidebarSection;
  @Input() public activeRoom: Room;
  @Input() public rooms: Room[];

  @Input() public users: User[];
  @Input() public usersOnline: number[];
  @Input() public typingMessages: TypingMessage[];
  @Input() public currentUser: User;

  constructor(
    public readonly store: Store<State>,
    public readonly dialog: MatDialog,
    public readonly roomService: RoomService,
    ) {}

  public createOrOpenRoom(user: User): void {
    const { currentUser, rooms } = this;
    const existingRoom = rooms.find(room => room.participants.some(participant => participant.id === user.id));

    if (existingRoom) {
      this.setActiveRoom(existingRoom);
    } else {
      this.roomService.createRoom([user.id, currentUser.id])
        .subscribe(room => {
          this.store.dispatch(new AddRoomAction(room));
          this.setActiveRoom(room);
        });
    }
  }

  public setActiveRoom(room: Room): void {
    this.store.dispatch(new SetActiveRoomAction(room));
  }

  public setActiveSection(section: SidebarSection): void {
    this.store.dispatch(new SetActiveSidebarSectionAction(section));
  }

  public isSectionActive(sectionName: string): boolean {
    return this.activeSection && this.activeSection.name === sectionName;
  }
}
