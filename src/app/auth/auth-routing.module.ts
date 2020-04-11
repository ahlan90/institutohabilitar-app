import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './guards/login-guard.service';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
    canActivate: [LoginGuard]
  },
  {
    path: 'inscricao',
    component: InscricaoComponent,
    data: { title: 'Inscrição' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
