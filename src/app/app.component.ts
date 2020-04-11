import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { TokenService } from './auth/services/token.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  token$;
  token;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}


  ngOnInit(): void {
    this.token$ = this.tokenService.getTokenAsObservable();

    this.token$.subscribe(res => {
      this.token = res;
    });
  }

  ngOnDestroy(): void {
    this.token$.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }


}
