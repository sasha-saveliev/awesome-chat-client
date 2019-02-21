import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../../modules/auth/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    public readonly authService: AuthService
  ) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken: string = this.authService.getAuthorizationToken();

    if (!authToken) {
      return next.handle(req);
    }

    const authReq: HttpRequest<any> = req.clone({
      headers: req.headers.set(this.authService.tokenIdentifier, this.authService.getAuthorizationToken())
    });

    return next.handle(authReq);
  }
}
