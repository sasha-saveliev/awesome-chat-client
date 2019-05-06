import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    public readonly http: HttpClient
  ) { }

  public fetchCurrentUser(): Observable<User> {
    return this.http.get<User>('users/current');
  }

  public fetchAll(): Observable<User[]> {
    return this.http.get<User[]>('users');
  }

  public fetchOnline(): Observable<number[]> {
    return this.http.get<number[]>('users/online');
  }
}
