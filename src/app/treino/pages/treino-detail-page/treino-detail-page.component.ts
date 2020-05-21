import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sessao } from '../../models/sessao';
import { SessaoService } from '../../services/sessao.service';
import { Exercicio } from '../../models/exercicio';
import { ExercicioService } from '../../services/exercicio.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((param) => {

      if (param.id) {

        this.sessaoService.getById(param.id).subscribe(res => {

          if (res) {
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
      exercicio.visualizado = true;
      this.exercicioService.setVisualizado(exercicio.id).subscribe(
        res => {},
        err => {
          exercicio.visualizado = false;
          console.log(err)
          this.openSnackBar('Não foi possível atualizar o exercício', 'Ok');
        });
    }
    this.index++;
    this.step = this.indexes[this.index];
  }

  prevStep() {
    this.index--;
    this.step = this.indexes[this.index];
  }

  finishStep(exercicio) {
    if (!exercicio.visualizado) {
      this.exercicioService.setVisualizado(exercicio.id).subscribe(res => {

      });
    }
    this.router.navigate(['']);
    this.index++;
  }

  isLastStep() {
    return this.step === this.indexes[this.indexes.length-1];
  }

  isFirstStep() {
    return this.step === this.indexes[0];
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
