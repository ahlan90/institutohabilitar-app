import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Credentials, User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const KEY = 'JWT-TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) { }


  login({ username, password }: Credentials){

    return this.http.post(
      environment.api + "-token-auth/",
      { username, password },
      { withCredentials: true, observe: "response" }
    ).pipe(
        tap(res => localStorage.setItem(KEY, res.body['token'])),
        //map(() => this.tokenService.decodeToken())
      )
  }

  logout() {
    localStorage.removeItem(KEY)
    this.router.navigate(['login'])
  }

}



