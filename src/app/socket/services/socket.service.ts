import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { AuthService } from '../../modules/auth/services';

// TODO: Move to ENV variables
const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public socket: SocketIOClient.Socket;

  constructor(public readonly authService: AuthService) {}

  public initConnection(): void {
    this.socket = io(API_URL, {
      query: {
        token: this.authService.getAuthorizationToken()
      }
    });
  }

  public getConnection(): SocketIOClient.Socket {
    return this.socket;
  }
}
