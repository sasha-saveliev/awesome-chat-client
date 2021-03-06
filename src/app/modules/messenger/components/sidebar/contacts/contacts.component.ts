import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../../models';

@Component({
  selector: 'ac-sidebar-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarContactsComponent {
  @Input() public users: User[];
  @Input() public usersOnline: number[];

  @Output() public roomChanged = new EventEmitter<User>();

  public activeContact: User;

  public toggleRoom(user: User) {
    this.activeContact = user;
    this.roomChanged.emit(user);
  }

  public get sortedByStatusUsers() {
    return this.users.sort((userA, userB) => {
      if (this.usersOnline.includes(userA.id)) {
        return -1;
      }

      if (this.usersOnline.includes(userB.id)) {
        return 1;
      }

      return 0;
    });
  }
}
