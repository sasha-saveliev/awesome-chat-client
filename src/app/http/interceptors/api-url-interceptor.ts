import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  // TODO: Move to ENV variables
  public readonly apiUrl = 'http://localhost:8080/';

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiReq: HttpRequest<any> = req.clone({
      url: `${this.apiUrl}${req.url}`
    });

    return next.handle(apiReq);
  }
}
