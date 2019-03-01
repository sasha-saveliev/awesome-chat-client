import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RoomsEvents } from '../../../socket/events';
import { SocketService } from '../../../socket/services/socket.service';
import { Room } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(
    public readonly socketService: SocketService,
    public readonly http: HttpClient
  ) {}

  public fetchRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('rooms');
  }

  public createRoom(participants: number[]): Observable<Room> {
    return new Observable(observer => {
      this.socketService.getConnection()
        .emit(RoomsEvents.CreateRoom, { participants }, (room: Room) => observer.next(room));
    });
  }
}
