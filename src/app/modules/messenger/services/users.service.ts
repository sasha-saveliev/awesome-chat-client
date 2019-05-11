import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SignUpFormModel } from '../../auth/components/sign-up-form/sign-up-form.model';
import { User } from '../models';

const ROUTE_PREFIX = 'users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    public readonly http: HttpClient
  ) { }

  public create(userModel: SignUpFormModel) {
    return this.http.post<SignUpFormModel>(ROUTE_PREFIX, userModel);
  }

  public fetchCurrentUser(): Observable<User> {
    return this.http.get<User>(`${ROUTE_PREFIX}/current`);
  }

  public fetchAll(): Observable<User[]> {
    return this.http.get<User[]>(ROUTE_PREFIX);
  }

  public fetchOnline(): Observable<number[]> {
    return this.http.get<number[]>(`${ROUTE_PREFIX}/online`);
  }
}
