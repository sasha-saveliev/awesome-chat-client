import { Action } from '@ngrx/store';

import { Message, Room, TypingMessage, User } from '../models';
import { SidebarSection } from '../models/sidebar-section.model';

export enum MessengerActionTypes {
  AddUsers = '[Messenger] Add Users',
  AddUser = '[Messenger] Add User',
  SetCurrentUser = '[Messenger] Set Current User',

  AddOnlineUsers = '[Messenger] Add Online Users',
  AddOnlineUser = '[Messenger] Add Online User',
  RemoveOnlineUser = '[Messenger] Remove Online User',

  AddRoom = '[Messenger] Add Room',
  AddRooms = '[Messenger] Add Rooms',
  SetActiveRoom = '[Messenger] Set Active Room',

  AddRoomMessage = '[Messenger] Add Room Message',
  AddTypingMessage = '[Messenger] Add Typing Message',
  RemoveTypingMessage = '[Messenger] Remove Typing Message',

  SetActiveSidebarSection = '[Messenger] Set Active Sidebar Section'
}

export class AddUsersAction implements Action {
  public readonly type = MessengerActionTypes.AddUsers;

  constructor(public payload: User[]) {}
}

export class AddUserAction implements Action {
  public readonly type = MessengerActionTypes.AddUser;

  constructor(public payload: User) {}
}

export class AddOnlineUsersAction implements Action {
  public readonly type = MessengerActionTypes.AddOnlineUsers;

  constructor(public payload: number[]) {}
}

export class AddOnlineUserAction implements Action {
  public readonly type = MessengerActionTypes.AddOnlineUser;

  constructor(public payload: number) {}
}

export class RemoveOnlineUserAction implements Action {
  public readonly type = MessengerActionTypes.RemoveOnlineUser;

  constructor(public payload: number) {}
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

export class AddTypingMessageAction implements Action {
  public readonly type = MessengerActionTypes.AddTypingMessage;

  constructor(public payload: TypingMessage) {}
}

export class RemoveTypingMessageAction implements Action {
  public readonly type = MessengerActionTypes.RemoveTypingMessage;

  constructor(public payload: TypingMessage) {}
}

export class SetActiveSidebarSectionAction implements Action {
  public readonly type = MessengerActionTypes.SetActiveSidebarSection;

  constructor(public payload: SidebarSection) {}
}

export type MessengerActions = AddUsersAction | AddUserAction | AddRoomAction
  | AddRoomsAction | AddRoomMessageAction | AddTypingMessageAction | RemoveTypingMessageAction | SetActiveRoomAction
  | SetCurrentUserAction | SetActiveSidebarSectionAction | AddOnlineUsersAction
  | AddOnlineUserAction | RemoveOnlineUserAction;
