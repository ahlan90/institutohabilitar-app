import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service';
import { Anamnse } from '../../models/anamnse';

@Component({
  selector: 'app-anamnse',
  templateUrl: './anamnse.component.html'
})
export class AnamnseComponent implements OnInit {

  anamnse: Anamnse;

  constructor(
    private questionarioService: QuestionarioService
  ) { }

  ngOnInit(): void {
    this.anamnse = this.questionarioService.getAnamnse();
  }

  formatLabel(value: number) {
    return value;
  }

  addAnamnse() {
    console.log(this.anamnse);

    this.questionarioService.setAnamnse(this.anamnse);
  }
}
