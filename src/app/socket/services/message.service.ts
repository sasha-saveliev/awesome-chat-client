import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Message } from '../../modules/messenger/models';
import { AddRoomMessageAction, State } from '../../modules/messenger/state';
import { MessagesEvents } from '../events';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class MessageSocketService {
  constructor(
    public readonly socketService: SocketService,
    public readonly store: Store<State>,
    ) {}

  public initSubscribers(): void {
    this.onNewMessage();
  }

  public onNewMessage(): void {
    this.socketService
      .getConnection()
      .on(MessagesEvents.NewMessage, (message: Message) => this.store.dispatch(new AddRoomMessageAction(message)));
  }
}
