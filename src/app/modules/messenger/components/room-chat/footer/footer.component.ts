import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { MessageFormModel } from './message-form.model';

@Component({
  selector: 'ac-room-chat-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomChatFooterComponent {
  @ViewChild('messageForm')
  public messageForm;

  @Output() public message = new EventEmitter<MessageFormModel>();

  public readonly messageModel: MessageFormModel = new MessageFormModel();

  public submitMessage() {
    if (!this.messageModel.text) {
      return;
    }

    this.message.emit(this.messageModel);

    // TODO: Reset form only after success request
    this.messageForm.reset();
  }
}
