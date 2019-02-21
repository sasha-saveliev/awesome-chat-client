import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { LoginFormModel } from '../components/login-form/login-form.model';
import { ApiAuthRoutesUrls } from '../enums';
import { Token } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly tokenIdentifier = 'token';

  constructor(
    public readonly http: HttpClient
  ) { }

  public authorize(loginModel: LoginFormModel) {
    return this.http.post(ApiAuthRoutesUrls.SignIn, loginModel)
      .pipe(
        tap(({ token }: Token) => this.setAuthorizationToken(token))
      );
  }

  public isAuthenticated(): boolean {
    return Boolean(this.getAuthorizationToken());
  }

  public getAuthorizationToken(): string {
    return localStorage.getItem(this.tokenIdentifier);
  }

  public setAuthorizationToken(token: string): void {
    localStorage.setItem(this.tokenIdentifier, token);
  }
}
