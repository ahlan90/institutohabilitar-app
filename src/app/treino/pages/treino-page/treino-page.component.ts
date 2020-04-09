import { Component, OnInit } from '@angular/core';
import { TreinoService } from '../../services/treino.service';
import { Sessao } from '../../models/sessao';
import { Observable } from 'rxjs';
import { Macrociclo } from '../../models/macrociclo';
import { Microciclo } from '../../models/mesociclo';

@Component({
  selector: 'app-treino-page',
  templateUrl: './treino-page.component.html',
  styleUrls: ['./treino-page.component.css']
})
export class TreinoPageComponent implements OnInit {

  microciclos: Microciclo[];

  constructor(
    private treinoService: TreinoService
  ) { }

  ngOnInit(): void {
    this.treinoService.getList()
      .subscribe((macrociclos: Macrociclo[]) => {
      this.microciclos = macrociclos[0].mesociclos[0].microciclos;
    });
  }

}
