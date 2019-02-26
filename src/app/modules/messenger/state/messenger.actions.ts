import { Action } from '@ngrx/store';

import { Room, User } from '../models';

export enum MessengerActionTypes {
  AddUsers = '[Messenger] Add Users',
  AddUser = '[Messenger] Add User',
  SetCurrentUser = '[Messenger] Set Current User',

  AddRoom = '[Messenger] Add Room',
  AddRooms = '[Messenger] Add Rooms'
}

export class AddUsersAction implements Action {
  public readonly type = MessengerActionTypes.AddUsers;

  constructor(public payload: User[]) {}
}

export class AddUserAction implements Action {
  public readonly type = MessengerActionTypes.AddUser;

  constructor(public payload: User) {}
}

export class SetCurrentUserAction implements Action {
  public readonly type = MessengerActionTypes.SetCurrentUser;

  constructor(public payload: User) {}
}

export class AddRoomsAction implements Action {
  public readonly type = MessengerActionTypes.AddRooms;

  constructor(public payload: Room[]) {}
}

export class AddRoomAction implements Action {
  public readonly type = MessengerActionTypes.AddRoom;

  constructor(public payload: Room) {}
}

export type MessengerActions = AddUsersAction | AddUserAction | AddRoomAction | AddRoomsAction | SetCurrentUserAction;
