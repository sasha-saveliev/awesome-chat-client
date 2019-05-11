import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../modules/messenger/models';
import { AddOnlineUserAction, AddUserAction, RemoveOnlineUserAction, State } from '../../modules/messenger/state';
import { UserEvents, UserStatusEvents } from '../events';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class UserSocketService {
  constructor(
    public readonly socketService: SocketService,
    public readonly store: Store<State>,
    ) {}

  public initSubscribers(): void {
    this.onNewUser();
    this.onStatusUpdate();
  }

  public onStatusUpdate(): void {
    this.socketService
      .getConnection()
      .on(UserStatusEvents.Online, (userId: number) => this.store.dispatch(new AddOnlineUserAction(userId)))
      .on(UserStatusEvents.Offline, (userId: number) => this.store.dispatch(new RemoveOnlineUserAction(userId)));
  }

  public onNewUser(): void {
    this.socketService
      .getConnection()
      .on(UserEvents.NewUser, (user: User) => this.store.dispatch(new AddUserAction(user)));
  }
}
