import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoencasCoracaoComponent } from './components/doencas-coracao/doencas-coracao.component';
import { ProblemasSaudeComponent } from './components/problemas-saude/problemas-saude.component';
import { SintomasComponent } from './components/sintomas/sintomas.component';
import { DoresComponent } from './components/dores/dores.component';
import { AnamnseComponent } from './components/anamnse/anamnse.component';


const routes: Routes = [
  {
    path: '',
    component: AnamnseComponent,
  },
  {
    path: 'coracao',
    component: DoencasCoracaoComponent,
  },
  {
    path: 'saude',
    component: ProblemasSaudeComponent,
  },
  {
    path: 'sintomas',
    component: SintomasComponent
  },
  {
    path: 'dores',
    component: DoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionarioRoutingModule { }
