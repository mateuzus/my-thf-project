import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class FiltroService {

  constructor(private http: HttpClient){}

  getConfere() {
    return [
      { value: 1, label: 'Conferido'},
      { value: 2, label: 'Não conferido'},
      { value: 3, label: 'Ambos'}
    ]
  }

  getDetalhe() {
    return [
      { value: true, label: 'Sim'},
      { value: false, label: 'Não'}
    ]
  }

  getParams(params): Observable<any>{
    return this.http.post("https://alpino-dts-teste.totvscloud.com.br/api/esp/v1/api-real8001b.r", params)
  }
}
