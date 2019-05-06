import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../../models';

@Component({
  selector: 'ac-sidebar-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class SidebarContactsComponent {
  @Input() public users: User[];
  @Output() public roomChanged = new EventEmitter<User>();

  public activeContact: User;

  public toggleRoom(user: User) {
    this.activeContact = user;
    this.roomChanged.emit(user);
  }
}
