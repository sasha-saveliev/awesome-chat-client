import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { Room, SidebarSection, User } from '../../models';
import { SetActiveRoomAction, SetActiveSidebarSectionAction, State } from '../../state';
import { DirectMessageDialogComponent } from '../direct-message-dialog/direct-message-dialog.component';

@Component({
  selector: 'ac-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() public activeSection: SidebarSection;
  @Input() public rooms: Room[];

  @Input() public users: User[];
  @Input() public currentUser: User;

  constructor(
    public readonly store: Store<State>,
    public readonly dialog: MatDialog
    ) {}

  public openDirectMessageDialog() {
    this.dialog.open(DirectMessageDialogComponent, {
      data: {
        rooms: this.rooms,
        users: this.users,
        currentUser: this.currentUser
      }
    });
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
