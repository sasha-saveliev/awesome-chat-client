import { Component, Input } from '@angular/core';

import { Room, User } from '../../../models';

@Component({
  selector: 'ac-room-chat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class RoomChatHeaderComponent {
  @Input() public title: string;
  @Input() public room: Room;

  @Input() public currentUser: User;
  @Input() public usersOnline: number[];

  public getStatus() {
    const user = this.room.participants.find(participant => participant.id !== this.currentUser.id);

    return this.usersOnline.includes(user.id) ? 'online' : '';
  }

  public getAvatar() {
    return this.room.participants
      .find(participant => participant.id !== this.currentUser.id)
      .avatarUrl;
  }
}
