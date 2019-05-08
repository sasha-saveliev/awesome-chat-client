import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';

import { ElectronService } from '../../../providers/electron.service';
import { Message } from '../models';
import {
  getActiveRoomSelector,
  getRoomByIdSelector,
  getUserByIdSelector,
  SetActiveRoomAction,
  State
} from '../state';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    public readonly http: HttpClient,
    public readonly electronService: ElectronService,
    public readonly store: Store<State>
  ) {}

  public notifyAboutNewMessage(message: Message): void {
    combineLatest(
      this.store.pipe(select(getUserByIdSelector(message.authorId))),
      this.store.pipe(select(getActiveRoomSelector)),
      this.store.pipe(select(getRoomByIdSelector(message.room.id)))
    )
    .subscribe(([sender, activeRoom, room]) => {
      if (this.electronService.currentWindow.isFocused()) {
        return;
      }

      const notification = new Notification(sender.username, { body: message.text });
      notification.onclick = () => {
        if (activeRoom && activeRoom.id === room.id) {
          return;
        }

        this.store.dispatch(new SetActiveRoomAction(room));
      };
    })
    .unsubscribe();
  }
}
