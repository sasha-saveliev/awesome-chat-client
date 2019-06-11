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
  @Output() public typingMessage = new EventEmitter<void>();
  @Output() public stopTypingMessage = new EventEmitter<void>();

  public typingTimer;
  public readonly doneTypingInterval = 1500;
  public isTyping = false;
  public isEmojiPickerVisible = false;

  public readonly messageModel: MessageFormModel = new MessageFormModel();

  public doneTyping() {
    this.stopTypingMessage.emit();
    this.isTyping = false;
  }

  public handleKeyUp(): void {
    if (!this.messageModel.text) {
      clearTimeout(this.typingTimer);

      return this.doneTyping();
    }

    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(this.doneTyping.bind(this), this.doneTypingInterval);

    if (!this.isTyping) {
      this.isTyping = true;
      this.typingMessage.emit();
    }
  }

  public handleKeyDown(): void {
    clearTimeout(this.typingTimer);
  }

  public toggleEmojiPicker(): void {
    this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
  }

  public submitMessage() {
    if (!this.messageModel.text) {
      return;
    }

    this.message.emit(this.messageModel);

    // TODO: Reset form only after success request
    this.messageForm.reset();
  }
}
