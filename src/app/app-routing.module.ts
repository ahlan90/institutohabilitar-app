import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/guards/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'treino',
    pathMatch: 'full'
  },
  {
    path: 'treino',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./treino/treino.module').then(m => m.TreinoModule)
  },
  {
    path: 'anamnse',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./questionario/questionario.module').then(m => m.QuestionarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
