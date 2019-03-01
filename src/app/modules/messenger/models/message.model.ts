import { Room } from './room.model';

export interface Message {
  id: number;
  authorId: number;
  text: string;
  timestamp: number;
  room: Room;
}
