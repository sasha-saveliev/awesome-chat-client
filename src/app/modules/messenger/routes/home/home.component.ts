import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { SocketService } from '../../../../socket/services';
import { MessageSocketService } from '../../../../socket/services/message.service';
import { Room, User } from '../../models';
import { UsersService } from '../../services';
import { RoomService } from '../../services/room.service';
import {
  AddRoomsAction,
  AddUsersAction,
  getActiveRoomSelector,
  getCurrentUserSelector,
  getRoomsSelector,
  getUsersSelector,
  SetCurrentUserAction,
  State
} from '../../state';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRouteComponent implements OnInit, OnDestroy {
  public currentUser: User;
  public users: User[];

  public activeRoom: Room;
  public rooms: Room[];

  constructor(
    public readonly usersService: UsersService,
    public readonly store: Store<State>,
    public readonly socketService: SocketService,
    public readonly messageSocketService: MessageSocketService,
    public readonly roomService: RoomService,
    public readonly cd: ChangeDetectorRef,
  ) {
    this.socketService.initConnection();
    this.messageSocketService.initSubscribers();

    this.usersService.fetchCurrentUser()
      .subscribe((user: User) => this.store.dispatch(new SetCurrentUserAction(user)));

    this.roomService.fetchRooms()
      .subscribe((rooms: Room[]) => this.store.dispatch(new AddRoomsAction(rooms)));

    this.usersService.fetchAll()
      .subscribe((users: User[]) => this.store.dispatch(new AddUsersAction(users)));
  }

  public ngOnInit(): void {
    this.store.pipe(select(getRoomsSelector), untilComponentDestroyed(this))
      .subscribe((rooms: Room[]) => {
        this.rooms = rooms;
        this.cd.detectChanges();
      });

    this.store.pipe(select(getCurrentUserSelector), untilComponentDestroyed(this))
      .subscribe((currentUser: User) => {
        this.currentUser = currentUser;
        this.cd.detectChanges();
      });

    this.store.pipe(select(getUsersSelector), untilComponentDestroyed(this))
      .subscribe((users: User[]) => {
        this.users = users;
        this.cd.detectChanges();
      });

    this.store.pipe(select(getActiveRoomSelector), untilComponentDestroyed(this))
    .subscribe((activeRoom: Room) => {
      this.activeRoom = activeRoom;
      this.cd.detectChanges();
    });
  }

  public ngOnDestroy(): void { }
}
