import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

// TODO: Move to ENV variables
const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public socket: SocketIOClient.Socket;

  public initConnection(): void {
    this.socket = io(API_URL);

    this.socket.emit('message', { test: 1 });
  }
}
