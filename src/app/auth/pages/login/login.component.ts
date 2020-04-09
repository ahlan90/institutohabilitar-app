import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Credentials } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  carregando = false;
  loginErro = false;

  credentials: Credentials = {
    username: '',
    password: ''
  }

  constructor(
    private route: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

  }

  login() {

    this.carregando = true;

    this.authService.login(this.credentials)
      .subscribe(
        () => {
          this.carregando = false;
          this.route.navigate(['']);
        },
        err => {
          console.log(err);

          this.loginErro = true;
          this.carregando = false;
        }
      )

  }

  onKey(event: any) {
    if (event.keyCode === 13) {
      this.login();
    }
  }

}
