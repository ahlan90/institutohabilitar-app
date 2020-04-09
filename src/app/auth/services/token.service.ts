import { Injectable } from '@angular/core';

import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../models/user';
import { of } from 'rxjs';

const KEY = 'JWT-TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

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

  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }

}
