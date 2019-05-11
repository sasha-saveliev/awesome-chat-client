import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Message, TypingMessage } from '../../modules/messenger/models';
import { NotificationService } from '../../modules/messenger/services';
import {
  AddRoomMessageAction,
  AddTypingMessageAction,
  RemoveTypingMessageAction,
  State
} from '../../modules/messenger/state';
import { MessagesEvents } from '../events';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class MessageSocketService {
  constructor(
    public readonly socketService: SocketService,
    public readonly notificationService: NotificationService,
    public readonly store: Store<State>,
    ) {}

  public initSubscribers(): void {
    this.onNewMessage();
    this.onTyping();
    this.onStopTyping();
  }

  public onNewMessage(): void {
    this.socketService
      .getConnection()
      .on(MessagesEvents.NewMessage, (message: Message) => {
        this.store.dispatch(new AddRoomMessageAction(message));
        this.notificationService.notifyAboutNewMessage(message);
      });
  }

  public onTyping(): void {
    this.socketService
      .getConnection()
      .on(MessagesEvents.TypingMessage, (typingMessage: TypingMessage) => {
        this.store.dispatch(new AddTypingMessageAction(typingMessage));
      });
  }

  public onStopTyping(): void {
    this.socketService
      .getConnection()
      .on(MessagesEvents.StopTypingMessage, (typingMessage: TypingMessage) => {
        this.store.dispatch(new RemoveTypingMessageAction(typingMessage));
      });
  }
}
