import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MessagesEvents } from '../../../socket/events';
import { SocketService } from '../../../socket/services/socket.service';
import { MessageFormModel } from '../components/room-chat/footer/message-form.model';
import { CreateMessage, Message, Room, TypingMessage, User } from '../models';
import { CreateMessageView } from '../models/create-message-view.model';

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

  public createTypingMessageEvent(typingMessage: TypingMessage) {
    return new Observable(observer => {
      this.socketService.getConnection()
        .emit(MessagesEvents.TypingMessage,
          typingMessage,
          () => observer.next(typingMessage)
        );
    });
  }

  public createStopTypingMessageEvent(typingMessage: TypingMessage) {
    return new Observable(observer => {
      this.socketService.getConnection()
        .emit(MessagesEvents.StopTypingMessage,
          typingMessage,
          () => observer.next(typingMessage)
        );
    });
  }

  public markMessageAsReaded(messageView: CreateMessageView) {
    return new Observable(observer => {
      this.socketService.getConnection()
        .emit(MessagesEvents.ViewMessage,
          messageView,
          () => observer.next(messageView)
        );
    });
  }

  private prepareMessagePayload(currentUser: User, messageModel: MessageFormModel, room: Room): CreateMessage {
    return {
      authorId: currentUser.id,
      createdAt: + new Date(),
      ...messageModel,
      roomId: room.id
    };
  }
}
