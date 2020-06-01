import { Component, OnInit } from '@angular/core';
import { Sintomas } from '../../models/sintomas';
import { QuestionarioService } from '../../services/questionario.service';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.component.html'
})
export class SintomasComponent implements OnInit {

  sintomas: Sintomas;

  constructor(
    private questionarioService: QuestionarioService
  ) { }

  ngOnInit(): void {
    this.sintomas = this.questionarioService.getSintomas();
  }

  addSintomas() {
    console.log(this.sintomas);

    this.questionarioService.setSintomas(this.sintomas);
  }

}
