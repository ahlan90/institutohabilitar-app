import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sessao } from '../models/sessao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  public apiURL;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.api + '/sessoes';
  }

  getById(id): Observable<Sessao> {
    return this.http.get<Sessao>(this.apiURL + `/${id}`);
  }
}
