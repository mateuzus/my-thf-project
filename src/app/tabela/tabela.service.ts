import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {


  constructor(private http: HttpClient) { }

  getColumns(component_instance) {
    return [
      {
        property: 'actions', label: 'Ações', type: 'icon', icons: [
          {
            action: (value, row) => {
              component_instance.abrirModalDetalhe(value, row, 'detail', 'Detalhes')
            },
            color: 'primary',
            icon: 'thf-icon thf-icon-list',
            tooltip: 'Clique para ver os detalhes',
            value: 'detalhar'
          }
        ]
      },
      { property: 'id', label: 'ID' },
      { property: 'nro-docto', label: 'Nmr. Documento' },
      { property: 'dt-trans', label: 'Dt. transação', type: 'string' },
      { property: 'cod-emitente', label: 'Cod. Emitente' },
      { property: 'cod-estabel', label: 'Cod. Estabelecimento', type: 'string' },
      { property: 'serie-docto', label: 'Serie Documento' },
      { property: 'nat-operacao', label: 'Nat. Operação' }
    ];
  }

  getConfere() {
    return [
      { value: 1, label: 'Conferido' },
      { value: 2, label: 'Não conferido' },
      { value: 3, label: 'Ambos' }
    ]
  }

  getDetalhe() {
    return [
      { value: true, label: 'Sim' },
      { value: false, label: 'Não' }
    ]
  }

  getParams(params) {

    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"))
    headers_send = headers_send.append("Content-Type", "application/json")

    let params2 = {
      "tt-param": params
    }

    return this.http.post("https://alpino-dts-teste.totvscloud.com.br/api/esp/v1/api-real8001b.r", params2, {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
  }


}
