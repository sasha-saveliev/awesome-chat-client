import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as moment from 'moment';

import { Message, Room, User } from '../../../../models';

@Component({
  selector: 'ac-sidebar-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarRoomComponent {
  @Input() public room: Room;
  @Input() public currentUser: User;

  // TODO: Check how to reduce count of checks also need to subscribe on message changes
  public getLastMessage(): Message {
    const messages = this.room.messages;

    return messages[messages.length - 1];
  }

  public get time() {
    return moment(Number(this.getLastMessage().timestamp)).format('H:mm');
  }

  // TODO: Subscribe on room and current user
  public get name() {
    return this.room.participants
      .find(participant => participant.id !== this.currentUser.id)
      .username;
  }
}
