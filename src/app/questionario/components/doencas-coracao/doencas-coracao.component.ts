import { Component, OnInit } from '@angular/core';
import { DoencasCoracao } from '../../models/doencas-coracao';
import { QuestionarioService } from '../../services/questionario.service';

@Component({
  selector: 'app-doencas-coracao',
  templateUrl: './doencas-coracao.component.html',
})
export class DoencasCoracaoComponent implements OnInit {

  doencasCoracao: DoencasCoracao;

  constructor(
    private questionarioService: QuestionarioService
  ) { }

  ngOnInit(): void {
    this.doencasCoracao = this.questionarioService.getDoencasCoracao();
  }

  addDoencasCoracao() {
    console.log(this.doencasCoracao);

    this.questionarioService.setDoencasCoracao(this.doencasCoracao);
  }
}
