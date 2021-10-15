import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  private baseUrl: string = environment.base_url_api

  constructor(private http: HttpClient){}

  getColumns(component_instance) {
    return [
      { property: 'actions', label: 'Ações', type: 'icon', icons: [
        {
          action: (value, row) => {
            component_instance.abrirModalDetalhe(value, row, 'detail', 'Detalhes')
          },
          color: 'primary',
          icon: 'thf-icon thf-icon-list',
          tooltip: 'Clique para ver os detalhes',
          value: 'detalhar'
        },
        {
          action: (value, row) => {
            component_instance.abrirModalDetalhe(value, row, 'edit', 'Editar');
          },
          // disabled: component_instance.canGoToDocumentation.bind(this),
          icon: 'thf-icon-edit',
          tooltip: 'Clique para editar',
          value: 'editar'
        },
        {
          action: (value, row) => {
            component_instance.abrirModalDetalhe(value, row, 'delete', 'Excluir');
          },
          // disabled: component_instance.canGoToDocumentation.bind(this),
          icon: 'thf-icon-delete',
          tooltip: 'Clique para excluir',
          value: 'excluir'
        }
      ] },
      { property: 'nro-docto', label: 'Nmr. Documento' },
      { property: 'dt-trans', label: 'Dt. transação', type: 'string' },
      { property: 'cod-emitente', label: 'Cod. Emitente' },
      { property: 'cod-estabel', label: 'Cod. Estabelecimento', type: 'string' },
      { property: 'dt-atualizacao', label: 'Dt. Atualização' },
      { property: 'dt-emissao', label: 'Dt. Emissão' },
      { property: 'conferido', label: 'Conferido' },
      { property: 'serie-docto', label: 'Serie Documento' },
      { property: 'qt-conferencia', label: 'Qtd. Conferência' },
      { property: 'nat-operacao', label: 'Nat. Operação' }

    ];
  }

  getItems(filter, sucess_func, error_func) {
    /* return [
      { id: '1', nroDocto: 'James Johnson', dtTrans: 'Ontario', codEmitent: 24, codEstabel: 'AB34lxi90', serieDocto: 'Systems Analyst', natOperacao: '412354' },
      { id: '2', nroDocto: 'Brian Brown', dtTrans: 'Buffalo', codEmitent: 23, codEstabel: 'HG56lds54', serieDocto: 'Trainee', natOperacao: '920183' },
      { id: '3', nroDocto: 'Mary Davis', dtTrans: 'Albany', codEmitent: 31, codEstabel: 'DF23cfr65', serieDocto: 'Programmer', natOperacao: '019278' },
      { id: '4', nroDocto: 'Margaret Garcia', dtTrans: 'New York', codEmitent: 29, codEstabel: 'GF45fgh34', serieDocto: 'Web developer', natOperacao: '102372' },
      { id: '5', nroDocto: 'Emma Hall', dtTrans: 'Ontario', codEmitent: 34, codEstabel: 'RF76jut21', serieDocto: 'Recruiter', natOperacao: '102987' },
      { id: '6', nroDocto: 'Lucas Clark', dtTrans: 'Utica', codEmitent: 32, codEstabel: 'HY21kgu65', serieDocto: 'Consultant', natOperacao: '543221' },
      { id: '7', nroDocto: 'Ella Scott', dtTrans: 'Ontario', codEmitent: 24, codEstabel: 'UL78flg68', serieDocto: 'DBA', natOperacao: '952121' },
      { id: '8', nroDocto: 'Chloe Walker', dtTrans: 'Albany', codEmitent: 29, codEstabel: 'JH12oli98', serieDocto: 'Programmer', natOperacao: '078843' },
    ]; */
    return this.apiCrudItems(filter, sucess_func, error_func)
  }

  apiCrudItems(data_send, success_func, error_func){
    let url = this.baseUrl + 'api-real8001a.r'

    let headers_send = new HttpHeaders()
    headers_send = headers_send.append("Authorization", "Basic" + btoa("maikon:Titi@01titi"))
    headers_send = headers_send.append("Content-Type", "application/json")

    return this.http.post(url, JSON.stringify(data_send), {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    })
    .subscribe(
      success_func,
      error_func
    )
  }

  getBaseUrl(){
    return this.baseUrl
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer'},
      { value: 'Web Developer', label: 'Web developer'},
      { value: 'Recruiter', label: 'Recruiter'},
      { value: 'Consultant', label: 'Consultant'},
      { value: 'DBA', label: 'DBA'}
    ];
  }
}
