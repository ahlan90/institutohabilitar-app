import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Questionario } from '../models/questionario';
import { Anamnse } from '../models/anamnse';
import { DoencasCoracao } from '../models/doencas-coracao';
import { ProblemasSaude } from '../models/problemas-saude';
import { Sintomas } from '../models/sintomas';
import { Dor } from '../models/dor';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  public apiURL;

  anamnse: Anamnse =  {
    "vestir_propria_roupa": false,
    "arrumar_cama": false,
    "trabalho_remunerado": false,
    "alimentar": false,
    "cozinhar": false,
    "ir_banco": false,
    "tomar_banho": false,
    "lavar_roupa": false,
    "pratica_esporte": false,
    "calca_amarra_sapatos": false,
    "arruma_casa": false,
    "subir_escadas": false
  }

  doencas_coracao: DoencasCoracao = {
    "infarto_miocardio": false,
    "doenca_valvar": false,
    "cirurgia_cardiaca": false,
    "insuficiencia_cardiaca": false,
    "arritmia_cardiaca": false,
    "angioplastia_cardiaca": false,
    "marcapasso_implantavel": false,
    "doenca_congenita": false,
    "outros": ""
  }

  problemas_saude: ProblemasSaude = {
    "hipertensao_arterial": false,
    "diabetes": false,
    "colesterol_alto": false,
    "doenca_pulmonar": false,
    "doenca_neurologica": false,
    "outros": ""
  }

  sintomas: Sintomas = {
    "queimacao_pernas": false,
    "vergitge": false,
    "inseguranca_realizar_exercicio": false,
    "falta_de_ar": false,
    "desconforto_toraxico": false
  }

  dor: Dor = {
    "cabeca": false,
    "pescoco": false,
    "ombros": false,
    "bracos": false,
    "maos": false,
    "quadril": false,
    "joelhos": false,
    "pes": false,
    "outros": "",
    "escala_dor": 0
  }

  questionario: Questionario = {
    "anamnse": this.anamnse,
    "doencas_coracao": this.doencas_coracao,
    "problemas_saude": this.problemas_saude,
    "sintomas": this.sintomas,
    "dor": this.dor
  }

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.api + '/api/questionario/';
  }

  addQuestionario() {
    return this.http.post<Questionario>(this.apiURL, this.questionario);
  }

  setAnamnse(anamnse: Anamnse) {
    this.questionario.anamnse = anamnse;
    console.log('Pos: ', this.questionario.anamnse);
  }

  setDoencasCoracao(doencas: DoencasCoracao) {
    this.questionario.doencas_coracao = this.doencas_coracao;
  }

  setProblemasSaude(problemas: ProblemasSaude) {
    this.questionario.problemas_saude = problemas;
  }

  setSintomas(sintomas: Sintomas) {
    this.questionario.sintomas = sintomas;
  }

  setDor(dor: Dor) {
    this.questionario.dor = dor;
  }

  getAnamnse() {
    return this.questionario.anamnse;
  }

  getDoencasCoracao() {
    return this.questionario.doencas_coracao;
  }

  getProblemasSaude() {
    return this.questionario.problemas_saude;
  }

  getSintomas() {
    return this.questionario.sintomas;
  }

  getDor() {
    return this.questionario.dor;
  }



}
