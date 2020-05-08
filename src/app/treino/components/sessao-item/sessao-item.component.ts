import { Component, OnInit, Input } from '@angular/core';
import { Sessao } from '../../models/sessao';
import { Router } from '@angular/router';
import { TreinoService } from '../../services/treino.service';

@Component({
  selector: 'app-sessao-item',
  template: `
    <button
      mat-raised-button
      (click)="navigate(sessao)"
      class="card-sessao mt-4 p-4"
      [ngClass]="{'sessao-finalizado': sessao.visualizada}"
      color="accent">
      <h3 class="m-0">{{ sessao.titulo }}</h3>
    </button>
  `,
  styles:[`
    .card-sessao {
      width: 100%;
    }

    .sessao-finalizado {
      background-color: #ff57226b;
    }
  `]
})
export class SessaoItemComponent implements OnInit {

  @Input() sessao: Sessao;

  sessaoFinalizado;

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  navigate(sessao) {
    this.router.navigate(['treino','detalhe', sessao.id]);
  }

}
