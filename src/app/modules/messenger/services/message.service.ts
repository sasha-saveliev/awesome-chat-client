import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MessagesEvents } from '../../../socket/events';
import { SocketService } from '../../../socket/services/socket.service';
import { MessageFormModel } from '../components/room-chat/footer/message-form.model';
import { CreateMessage, Message, Room, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    public readonly socketService: SocketService,
    public readonly http: HttpClient
  ) {}

  public createMessage(currentUser: User, messageModel: MessageFormModel, room: Room) {
    return new Observable(observer => {
      this.socketService.getConnection()
        .emit(MessagesEvents.CreateMessage,
          this.prepareMessagePayload(currentUser, messageModel, room),
          (message: Message) => observer.next(message)
        );
    });
  }

  private prepareMessagePayload(currentUser: User, messageModel: MessageFormModel, room: Room): CreateMessage {
    return {
      authorId: currentUser.id,
      timestamp: + new Date(),
      ...messageModel,
      roomId: room.id
    };
  }
}
