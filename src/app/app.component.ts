import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { TokenService } from './auth/services/token.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  token$;
  token;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}


  ngOnInit(): void {
    this.token$ = this.tokenService.getTokenAsObservable();

    this.token$.subscribe(res => {
      console.log('VALOR', res);
      this.token = res;

    })

  }


  logout() {
    this.authService.logout();
  }


}
