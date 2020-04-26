import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sessao } from '../models/sessao';
import { Observable } from 'rxjs';
import { Exercicio } from '../models/exercicio';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  public apiURL;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.api + '/api/exercicios/';
  }

  setVisualizado(id): Observable<Exercicio> {
    return this.http.patch<Exercicio>(this.apiURL + `${id}/visualizar`, {});
  }
}
