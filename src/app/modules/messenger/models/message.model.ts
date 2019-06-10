import { MessageView } from './message-view.model';
import { Room } from './room.model';

export interface Message {
  id: number;
  authorId: number;
  text: string;
  createdAt: number;
  views: MessageView[];
  room: Room;
}
