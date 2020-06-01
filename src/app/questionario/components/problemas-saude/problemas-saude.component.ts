import { Component, OnInit } from '@angular/core';
import { ProblemasSaude } from '../../models/problemas-saude';
import { QuestionarioService } from '../../services/questionario.service';

@Component({
  selector: 'app-problemas-saude',
  templateUrl: './problemas-saude.component.html',
})
export class ProblemasSaudeComponent implements OnInit {

  problemasSaude: ProblemasSaude;

  constructor(
    private questionarioService: QuestionarioService
  ) { }

  ngOnInit(): void {
    this.problemasSaude = this.questionarioService.getProblemasSaude();
  }


  addProblemasSaude() {
    console.log(this.problemasSaude);
    this.questionarioService.setProblemasSaude(this.problemasSaude);
  }
}
