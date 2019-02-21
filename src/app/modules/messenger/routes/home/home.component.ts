import { Component } from '@angular/core';

import { SocketService } from '../../../../socket/services';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeRouteComponent {
  constructor(private readonly socketService: SocketService) {
    this.socketService.initConnection();
  }
}
