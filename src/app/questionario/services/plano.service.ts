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
import { Plano } from '../models/plano';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  public apiURL;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.api + '/aplicativo/planos/';
  }

  getAll(): Observable<Plano[]> {
    return this.http.get<Plano[]>(this.apiURL).pipe(
      map(res => {
        return res['results'];
      })
    );
  }
}
