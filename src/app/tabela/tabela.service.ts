import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  

  constructor(private http: HttpClient) { }

  getColumns(component_instance) {
    return [
      { property: "actions", label: "Ações", type: "icon", icons: [
        {
           action: (value, row) => {
            component_instance.abrirModalDetalhes(
              value, row
            )
          }, 
          color: "primary",
          icon: "thf-icon thf-icon-eye",
          tooltip: "Clique para ver os detalhes",
          value: "detalhar"
        }
      ]},
      
      { property: 'cod-estabel', label: 'Estabel', type: 'string' },
      { property: 'cod-emitente', label: 'Emitente' },
      { property: 'nro-docto', label: 'Documento' },
      { property: 'serie-docto', label: 'Serie' },
      { property: 'nat-operacao', label: 'Natureza' },
      { property: 'dt-emissao', label: 'Emissão'},
      { property: 'dt-trans', label: 'Transação', type: 'string' },
      { property: 'conferido', label: 'Conferido'},
      { property: 'qtd-conferencia', label: 'Qtd Conf.' },
      { property: 'dt-atualizacao', label: 'Atualização'},
    ]
  }

  getConfere() {
    return [
      { value: 1, label: 'Não conferido' },
      { value: 2, label: 'Conferido' },
      { value: 3, label: 'Ambos' }
    ]
  }

  getDetalhe() {
    return [
      { value: true, label: 'Sim' },
      { value: false, label: 'Não' }
    ]
  }

  realA(params, sucess_func?, error_func?){
    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"))
    headers_send = headers_send.append("Content-Type", "application/json")

    let params2 = {
      "tt-param": params
    }

    return this.http.post("https://alpino-dts-teste.totvscloud.com.br/api/esp/v1/api-real8001a.r", params2, {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true,
      params: params2
    })
    .subscribe(
      sucess_func,
      error_func
    )
  }

  realB(params, sucess_func?, error_func?) {

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
    }).subscribe(
      sucess_func,
      error_func
    )
  }
}
