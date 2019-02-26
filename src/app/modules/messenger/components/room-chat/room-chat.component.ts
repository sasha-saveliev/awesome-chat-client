import { Component, Input } from '@angular/core';

import { Room } from '../../models';

@Component({
  selector: 'ac-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.scss']
})
export class RoomChatComponent {
  @Input() public room: Room;
}
