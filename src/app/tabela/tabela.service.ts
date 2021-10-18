import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
      { property: 'id', label: 'Nmr. Documento' },
      { property: 'nome', label: 'Dt. transação', type: 'string' },
      { property: 'idade', label: 'Cod. Emitente' },
      { property: 'cod-estabel', label: 'Cod. Estabelecimento', type: 'string' },
      { property: 'dt-atualizacao', label: 'Dt. Atualização' },
      { property: 'dt-emissao', label: 'Dt. Emissão' },
      { property: 'conferido', label: 'Conferido' },
      { property: 'serie-docto', label: 'Serie Documento' },
      { property: 'qt-conferencia', label: 'Qtd. Conferência' },
      { property: 'nat-operacao', label: 'Nat. Operação' }

    ];
  }

  getItems() {

  }


}
