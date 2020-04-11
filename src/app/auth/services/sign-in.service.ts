import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SignIn } from '../models/user';

const KEY = 'JWT-TOKEN';

@Injectable({
  providedIn: 'root'
})
export class SignInService {


  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) { }


  signIn({ username, password, email, first_name }: SignIn){

    return this.http.post(
      environment.api + "/api-token-auth/",
      { username, password },
      { withCredentials: true, observe: "response" }
    ).pipe(
        tap(res => this.tokenService.setToken(res.body['token'])),
      )
  }



}



