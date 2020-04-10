import { Injectable } from '@angular/core';

import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../models/user';
import { of, BehaviorSubject } from 'rxjs';

const KEY = 'JWT-TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenSubject = new BehaviorSubject<string>(null);

  constructor() { }

  jwtHelper = new JwtHelperService()

  hasToken() {
    return !!this.getToken();
  }

  decodeToken(): User {
    return this.jwtHelper.decodeToken(this.getToken()) as User;
  }

  expiredToken() {
    return !this.jwtHelper.isTokenExpired(this.getToken());
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  getTokenAsObservable() {
    return this.tokenSubject.asObservable();
  }

  setToken(token) {
    window.localStorage.setItem(KEY, token);
    this.tokenSubject.next(token);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
    this.tokenSubject.next(null);
  }

}
