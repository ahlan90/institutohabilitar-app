import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sessao } from '../../models/sessao';
import { SessaoService } from '../../services/sessao.service';
import { Exercicio } from '../../models/exercicio';
import { ExercicioService } from '../../services/exercicio.service';

@Component({
  selector: 'app-treino-detail-page',
  templateUrl: './treino-detail-page.component.html',
  styleUrls: ['./treino-detail-page.component.scss']
})
export class TreinoDetailPageComponent implements OnInit {

  idSessao;
  sessao: Sessao;

  step = 0;

  index = 0;
  indexes;

  constructor(
    private sessaoService: SessaoService,
    private exercicioService: ExercicioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //this.sessao = this.treinoService.getCurrentSessao();

    this.route.params.subscribe((param) => {

      if (param.id) {

        this.sessaoService.getById(param.id).subscribe(res => {
          if (res) {
            console.log('resultado', res);

            this.sessao = res;

            this.indexes = this.sessao.exercicios.map(exercicio => exercicio.ordem);
            this.step = this.indexes[this.index];

          }
        })
      }
    })

  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep(exercicio: Exercicio) {
    if (!exercicio.visualizado) {
      console.log('Entrou');
      this.exercicioService.setVisualizado(exercicio.id).subscribe(res => {
        console.log('Funcionou');
        exercicio.visualizado = true;
      });
    }
    this.index++;
    this.step = this.indexes[this.index];
  }

  prevStep() {
    this.index--;
    this.step = this.indexes[this.index];
  }

  isLastStep() {
    return this.step === this.indexes[this.indexes.length-1];
  }

  isFirstStep() {
    return this.step === this.indexes[0];
  }

}
