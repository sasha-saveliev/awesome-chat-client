import { Action } from '@ngrx/store';

import { User } from '../models';

export enum MessengerActionTypes {
  AddUsers = '[Messenger] Add Users',
  AddUser = '[Messenger] Add User',
}

export class AddUsersAction implements Action {
  public readonly type = MessengerActionTypes.AddUsers;

  constructor(public payload: User[]) {}
}

export class AddUserAction implements Action {
  public readonly type = MessengerActionTypes.AddUser;

  constructor(public payload: User) {}
}

export type MessengerActions = AddUsersAction | AddUserAction;
