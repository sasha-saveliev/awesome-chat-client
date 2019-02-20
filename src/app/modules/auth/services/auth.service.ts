import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly tokenIdentifier = 'token';

  public isAuthenticated(): boolean {
    if (!localStorage.getItem(this.tokenIdentifier)) {
      return false;
    }
  }
}
