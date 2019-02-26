import { User } from './user.model';

export interface Room {
  id: number;
  participants: User[];
}
