import { Room } from './room.model';
import { User } from './user.model';

export interface DirectMessageDialogDataModel {
  currentUser: User;
  rooms: Room[];
  users: User[];
}
