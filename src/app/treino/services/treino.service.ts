import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sessao } from '../models/sessao';
import { Macrociclo } from '../models/macrociclo';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  public apiURL;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.api + '/api/macrociclos/';
  }

  getList(): Observable<Macrociclo[]> {
    return this.http.get<Macrociclo[]>(this.apiURL);
  }
}
