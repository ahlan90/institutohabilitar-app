import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn } from '../../models/user';
import { SignInService } from '../../services/sign-in.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {

  carregando = false;
  loginErro = false;

  credentials: SignIn = {
    username: '',
    password: '',
    email: '',
    first_name: ''
  }

  constructor(
    private route: Router,
    private signInService: SignInService
  ) { }

  ngOnInit() {

  }

  signIn() {

    this.carregando = true;

    this.signInService.signIn(this.credentials)
      .subscribe(
        () => {
          this.carregando = false;
          this.route.navigate(['']);
        },
        err => {
          this.loginErro = true;
          this.carregando = false;
        }
      )
  }

}
