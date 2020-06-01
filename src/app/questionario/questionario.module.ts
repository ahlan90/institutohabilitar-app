import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionarioRoutingModule } from './questionario-routing.module';
import { MaterialModule } from '../material/material.module';
import { AnamnseComponent } from './components/anamnse/anamnse.component';
import { DoencasCoracaoComponent } from './components/doencas-coracao/doencas-coracao.component';
import { ProblemasSaudeComponent } from './components/problemas-saude/problemas-saude.component';
import { SintomasComponent } from './components/sintomas/sintomas.component';
import { DoresComponent } from './components/dores/dores.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnamnseComponent,
    DoencasCoracaoComponent,
    ProblemasSaudeComponent,
    SintomasComponent,
    DoresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuestionarioRoutingModule,
    MaterialModule
  ]
})
export class QuestionarioModule { }
