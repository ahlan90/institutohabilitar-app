import { Component, OnInit, Input } from '@angular/core';
import { Sessao } from '../../models/sessao';
import { Router } from '@angular/router';
import { TreinoService } from '../../services/treino.service';

@Component({
  selector: 'app-treino-item',
  template: `
    <button
      mat-raised-button
      (click)="navigate(treino)"
      class="card-treino mt-4 p-4"
      [ngClass]="{'treino-finalizado': isSessaoFinalizada()}"
      color="accent">
      <h3 class="m-0">{{ treino.titulo }}</h3>
    </button>
  `,
  styles:[`
    .card-treino {
      width: 100%;
    }

    .treino-finalizado {
      background-color: #ff57226b;
    }
  `]
})
export class TreinoItemComponent implements OnInit {

  @Input() treino: Sessao;

  treinoFinalizado;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(treino) {
    this.router.navigate(['treino','detalhe', treino.id]);
  }

  isSessaoFinalizada() {
    console.log('TREINO ', this.treino);

    this.treino.exercicios.forEach(exercicio => {
      this.treinoFinalizado = this.treinoFinalizado && exercicio.visualizado;
      console.log('finalizada ', this.treinoFinalizado);
    });

    return this.treinoFinalizado;
  }
}
