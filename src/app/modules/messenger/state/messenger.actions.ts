import { Action } from '@ngrx/store';

import { Room, User } from '../models';

export enum MessengerActionTypes {
  AddUsers = '[Messenger] Add Users',
  AddUser = '[Messenger] Add User',
  AddRoom = '[Messenger] Add Room'
}

export class AddUsersAction implements Action {
  public readonly type = MessengerActionTypes.AddUsers;

  constructor(public payload: User[]) {}
}

export class AddUserAction implements Action {
  public readonly type = MessengerActionTypes.AddUser;

  constructor(public payload: User) {}
}

export class AddRoomAction implements Action {
  public readonly type = MessengerActionTypes.AddRoom;

  constructor(public payload: Room) {}
}

export type MessengerActions = AddUsersAction | AddUserAction | AddRoomAction;
