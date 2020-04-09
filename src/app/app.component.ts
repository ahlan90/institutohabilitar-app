import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { TokenService } from './auth/services/token.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  logout() {
    this.authService.logout();
  }


}
