import { Component, OnInit, Input } from '@angular/core';
import { Sessao } from '../../models/sessao';
import { Router } from '@angular/router';
import { TreinoService } from '../../services/treino.service';

@Component({
  selector: 'app-treino-item',
  template: `
    <button
      mat-raised-button (click)="navigate(treino)"
      class="card-treino mt-3 p-3" color="accent">
      <h4>{{ treino.titulo }}</h4>
      <h5>{{ treino.subtitulo }}</h5>
    </button>
  `,
  styles:[`
    .card-treino {
      width: 100%;
    }
  `]
})
export class TreinoItemComponent implements OnInit {

  @Input() treino: Sessao;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(treino) {
    this.router.navigate(['treino','detalhe', treino.id]);
  }
}
