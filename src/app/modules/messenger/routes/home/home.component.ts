import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { forkJoin } from 'rxjs';

import { MessageSocketService, SocketService, UserSocketService } from '../../../../socket/services';
import { Room, SidebarSection, TypingMessage, User } from '../../models';
import { UsersService } from '../../services';
import { RoomService } from '../../services/room.service';
import {
  AddOnlineUsersAction,
  AddRoomsAction,
  AddUsersAction,
  getActiveRoomSelector,
  getActiveSidebarSectionSelector,
  getCurrentUserSelector,
  getOnlineUsersSelector,
  getRoomsSelector,
  getTypingMessagesSelector,
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
  public usersOnline: number[];
  public typingMessages: TypingMessage[];

  public activeSidebarSection: SidebarSection;

  public activeRoom: Room;
  public rooms: Room[];

  constructor(
    public readonly usersService: UsersService,
    public readonly store: Store<State>,
    public readonly socketService: SocketService,
    public readonly messageSocketService: MessageSocketService,
    public readonly userSocketService: UserSocketService,
    public readonly roomService: RoomService,
    public readonly cd: ChangeDetectorRef,
  ) {
    this.socketService.initConnection();
    this.messageSocketService.initSubscribers();
    this.userSocketService.initSubscribers();

    forkJoin(
      this.usersService.fetchCurrentUser(),
      this.roomService.fetchRooms(),
      this.usersService.fetchAll(),
      this.usersService.fetchOnline()
    )
    .subscribe(([user, rooms, users, usersOnline]) => {
      this.store.dispatch(new SetCurrentUserAction(user));
      this.store.dispatch(new AddRoomsAction(rooms));
      this.store.dispatch(new AddUsersAction(users));
      this.store.dispatch(new AddOnlineUsersAction(usersOnline));
    });
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

    this.store.pipe(select(getActiveSidebarSectionSelector), untilComponentDestroyed(this))
      .subscribe((activeSidebarSection: SidebarSection) => {
        this.activeSidebarSection = activeSidebarSection;
        this.cd.detectChanges();
      });

    this.store.pipe(select(getOnlineUsersSelector), untilComponentDestroyed(this))
      .subscribe((usersOnline: number[]) => {
        this.usersOnline = usersOnline;
        this.cd.detectChanges();
      });

    this.store.pipe(select(getTypingMessagesSelector), untilComponentDestroyed(this))
      .subscribe((typingMessages: TypingMessage[]) => {
        this.typingMessages = typingMessages;
        this.cd.detectChanges();
      });
  }

  public ngOnDestroy(): void { }
}
