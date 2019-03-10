import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Message, Room, User } from '../../models';
import { MessageService } from '../../services';
import { AddRoomMessageAction, State } from '../../state';
import { MessageFormModel } from './footer/message-form.model';

@Component({
  selector: 'ac-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.scss']
})
export class RoomChatComponent {
  @Input() public room: Room;
  @Input() public currentUser: User;

  constructor(
    public readonly messageService: MessageService,
    public readonly store: Store<State>,
    ) {}

  public submitMessage(messageModel: MessageFormModel) {
    this.messageService
      .createMessage(this.currentUser, messageModel, this.room)
      .subscribe((message: Message) => this.store.dispatch(new AddRoomMessageAction(message)));
  }

  // TODO: Check how to reduce count of checks
  public getMessageAuthor(message: Message): User {
    return this.room.participants.find(({ id }) => id === message.authorId);
  }
}
