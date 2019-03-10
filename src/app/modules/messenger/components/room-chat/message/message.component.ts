import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as moment from 'moment';

import { Message, User } from '../../../models';

@Component({
  selector: 'ac-room-chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  @Input() public readonly message: Message;
  @Input() public readonly author: User;
  @Input() public showAuthor: boolean = true;

  public get time() {
    return moment(Number(this.message.timestamp)).format('H:mm');
  }
}
