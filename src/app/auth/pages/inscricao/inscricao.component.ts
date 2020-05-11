import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn } from '../../models/user';
import { SignInService } from '../../services/sign-in.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private signInService: SignInService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {

  }

  signIn() {

    this.carregando = true;

    this.signInService.signIn(this.credentials)
      .subscribe(
        () => {
          this.carregando = false;
          this.route.navigate(['login']);
          this.openSnackBar('Login criado com sucesso', '');
        },
        err => {
          this.loginErro = true;
          this.carregando = false;
        }
      )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
