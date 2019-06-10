import { Component, Input } from '@angular/core';
import * as moment from 'moment';

import { Message, Room, TypingMessage, User } from '../../../../models';

@Component({
  selector: 'ac-sidebar-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class SidebarRoomComponent {
  @Input() public isActive: boolean;
  @Input() public room: Room;
  @Input() public currentUser: User;
  @Input() public typingMessages: TypingMessage[];
  @Input() public usersOnline: number[];

  // TODO: Check how to reduce count of checks also need to subscribe on message changes
  public getLastMessage(): Message {
    const messages = this.room.messages;

    return messages[messages.length - 1];
  }

  public get time() {
    return moment(Number(this.getLastMessage().createdAt)).format('H:mm');
  }

  // TODO: Subscribe on room and current user
  public get name() {
    return this.room.participants
      .find(participant => participant.id !== this.currentUser.id)
      .username;
  }

  public get isTypingLabelVisible(): boolean {
    return this.typingMessages.length > 0 && !this.isActive;
  }

  public get avatar() {
    return this.room.participants
      .find(participant => participant.id !== this.currentUser.id)
      .avatarUrl;
  }

  public isOnline() {
    const user = this.room.participants.find(participant => participant.id !== this.currentUser.id);
    console.log(this.usersOnline)
    return this.usersOnline.includes(user.id);
  }

  public get unreadedCount(): number {
    return this.room.messages
    .filter(message => message.authorId !== this.currentUser.id)
    .reduce((acc, message) => {
      const isAlreadyViewed = message.views.find(view => view.seenBy === this.currentUser.id);

      if (isAlreadyViewed) {
        return acc;
      }

      return acc + 1;
    }, 0);
  }
}
