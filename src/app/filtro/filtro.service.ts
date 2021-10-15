import { Injectable } from '@angular/core';


@Injectable()
export class FiltroService {

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
}
