import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const auth = this.injector.get(AuthenticationService);
    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${auth.getToken()}`
      }
    });
    return next.handle(tokenizedRequest);
  }

}
