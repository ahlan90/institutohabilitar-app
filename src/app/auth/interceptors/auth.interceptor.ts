import { TokenService } from './../../auth/services/token.service';
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private token = '';
  private AUTH_HEADER = "Authorization";

  constructor(
    private tokenService: TokenService
  ) {
    this.token = this.tokenService.getToken();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
    }

    req = this.addAuthenticationToken(req);

    return next.handle(req)

  }


  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {

    if (!this.token) {
      return request;
    }
    let retorno = request.headers.set(this.AUTH_HEADER, 'Token ' + this.token);
    return request.clone({
      headers: retorno
    });
  }
}
