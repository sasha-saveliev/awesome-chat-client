import { Component, Input } from '@angular/core';
import { Room } from '../../../models';

@Component({
  selector: 'ac-sidebar-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class SidebarRoomComponent {
  @Input() public room: Room;
}
