import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getParams(params){

    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"));
    headers_send = headers_send.append("Content-Type", "application/json");

    return this.http.post("https://alpino-dts-teste.totvscloud.com.br/api/esp/v1/api-real8001b.r", params, {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
  }
}
