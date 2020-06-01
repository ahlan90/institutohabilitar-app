import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service';
import { Dor } from '../../models/dor';

@Component({
  selector: 'app-dores',
  templateUrl: './dores.component.html'
})
export class DoresComponent implements OnInit {

  dor: Dor;

  checkDor = null;

  constructor(
    private questionarioService: QuestionarioService
  ) { }

  ngOnInit(): void {
    this.dor = this.questionarioService.getDor();
  }

  addQuestionario() {
    console.log(this.dor);
    this.questionarioService.setDor(this.dor);
    this.questionarioService.addQuestionario().subscribe(res => {
    });
  }
}
