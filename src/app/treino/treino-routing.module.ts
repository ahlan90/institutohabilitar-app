import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreinoPageComponent } from './pages/treino-page/treino-page.component';
import { TreinoDetailPageComponent } from './pages/treino-detail-page/treino-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: TreinoPageComponent
  },
  {
    path: 'detalhe/:id',
    component: TreinoDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreinoRoutingModule { }
