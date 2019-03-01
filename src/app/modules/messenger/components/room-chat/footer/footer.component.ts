import { Component, EventEmitter, Output } from '@angular/core';

import { MessageFormModel } from './message-form.model';

@Component({
  selector: 'ac-room-chat-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class RoomChatFooterComponent {
  @Output() public message = new EventEmitter<MessageFormModel>();

  public readonly messageModel: MessageFormModel = new MessageFormModel();

  public submitMessage() {
    this.message.emit(this.messageModel);
  }
}
