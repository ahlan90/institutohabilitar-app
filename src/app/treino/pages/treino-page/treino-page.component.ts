import { Component, OnInit } from '@angular/core';
import { TreinoService } from '../../services/treino.service';
import { Microciclo } from '../../models/mesociclo';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-treino-page',
  templateUrl: './treino-page.component.html',
  styleUrls: ['./treino-page.component.scss']
})
export class TreinoPageComponent implements OnInit {

  microciclos: Microciclo[];

  constructor(
    private treinoService: TreinoService
  ) { }

  ngOnInit(): void {

    this.treinoService.getList()
      .pipe(take(1))
      .subscribe(macrociclos => {
      this.microciclos = macrociclos[0].mesociclos[0].microciclos;
    });

  }

}
