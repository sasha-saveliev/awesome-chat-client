import { Action } from '@ngrx/store';

import { Message, Room, User } from '../models';

export enum MessengerActionTypes {
  AddUsers = '[Messenger] Add Users',
  AddUser = '[Messenger] Add User',
  SetCurrentUser = '[Messenger] Set Current User',

  AddRoom = '[Messenger] Add Room',
  AddRooms = '[Messenger] Add Rooms',
  SetActiveRoom = '[Messenger] Set Active Room',
  AddRoomMessage = '[Messenger] Add Room Message',
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

export class SetActiveRoomAction implements Action {
  public readonly type = MessengerActionTypes.SetActiveRoom;

  constructor(public payload: Room) {}
}

export class AddRoomMessageAction implements Action {
  public readonly type = MessengerActionTypes.AddRoomMessage;

  constructor(public payload: Message) {}
}

export type MessengerActions = AddUsersAction | AddUserAction | AddRoomAction
  | AddRoomsAction | AddRoomMessageAction | SetActiveRoomAction | SetCurrentUserAction;
