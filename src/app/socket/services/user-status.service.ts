import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AddOnlineUserAction, RemoveOnlineUserAction, State } from '../../modules/messenger/state';
import { UserStatusEvents } from '../events';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class UserStatusSocketService {
  constructor(
    public readonly socketService: SocketService,
    public readonly store: Store<State>,
    ) {}

  public initSubscribers(): void {
    this.onStatusUpdate();
  }

  public onStatusUpdate(): void {
    this.socketService
      .getConnection()
      .on(UserStatusEvents.Online, (userId: number) => this.store.dispatch(new AddOnlineUserAction(userId)))
      .on(UserStatusEvents.Offline, (userId: number) => this.store.dispatch(new RemoveOnlineUserAction(userId)));
  }
}
